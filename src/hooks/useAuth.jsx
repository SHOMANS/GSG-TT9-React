import { useReducer } from 'react';
import { ROLES } from '../constants/index';
import { AUTH_ACTIONS, AUTH_API_PATHS } from '../constants/auth';
import axios from 'axios';
import { AUTH_API } from '../config/api';

const initialState = {
  isAuth: false,
  user: null,
  token: null,
  role: ROLES.GUEST,
  error: null,
  isLoading: false,
};

const reduce = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case AUTH_ACTIONS.AUTHORIZE:
      const token = action?.payload?.token || state?.token;
      const role = action?.payload?.isAdmin ? ROLES.ADMIN : ROLES.USER;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('user', JSON.stringify(action.payload.user));

      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: token,
        role: role,
        error: null,
        isLoading: false,
      };

    case AUTH_ACTIONS.LOGOUT:
      ['token', 'role', 'user'].forEach((item) =>
        localStorage.removeItem(item)
      );
      return initialState;

    case AUTH_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

const useAuth = () => {
  const [state, dispatch] = useReducer(reduce, initialState);
  const token = state.token || localStorage.getItem('token');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const login = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.post(AUTH_API + AUTH_API_PATHS.LOGIN, body);
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  const signup = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.post(AUTH_API + AUTH_API_PATHS.SIGNUP, body);
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  const logout = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  };

  const getProfileData = async () => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.get(
        AUTH_API + AUTH_API_PATHS.PROFILE,
        config
      );
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  return {
    ...state,
    login,
    signup,
    logout,
    getProfileData,
  };
};

export default useAuth;
