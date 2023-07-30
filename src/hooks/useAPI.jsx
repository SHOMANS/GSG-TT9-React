import axios from 'axios';
import { useReducer } from 'react';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  message: '',
  item: null,
};

const ACTIONS_TYPES = {
  SET_LOADING: 'SET_LOADING',
  GET_ALL: 'GET_ALL',
  GET_SINGLE: 'GET_SINGLE',
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  SET_ERROR: 'SET_ERROR',
  SET_MESSAGE: 'SET_MESSAGE',
};

const reduce = (state, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.GET_ALL:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case ACTIONS_TYPES.GET_SINGLE:
      return {
        ...state,
        isLoading: false,
        item: action.payload,
        error: null,
      };
    case ACTIONS_TYPES.CREATE:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
        message: 'Success!',
        error: null,
      };
    case ACTIONS_TYPES.UPDATE:
      return {
        ...state,
        isLoading: false,
        data: state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        message: 'Success!',
        error: null,
      };
    case ACTIONS_TYPES.DELETE:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((item) => item.id !== action.payload),
        message: 'Success!',
        error: null,
      };
    case ACTIONS_TYPES.SET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ACTIONS_TYPES.SET_MESSAGE:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

const useAPI = (url, config) => {
  const [state, dispatch] = useReducer(reduce, initialState);

  const get = async (getConfig) => {
    try {
      dispatch({ type: ACTIONS_TYPES.SET_LOADING });
      const res = await axios.get(url, { ...config, ...getConfig });
      dispatch({
        type: ACTIONS_TYPES.GET_ALL,
        payload: res?.data?.data || res?.data,
      });
    } catch (error) {
      setError(error);
    }
  };

  const getSingle = async (id, getConfig) => {
    try {
      dispatch({ type: ACTIONS_TYPES.SET_LOADING });
      const res = await axios.get(`${url}/${id}`, { ...config, ...getConfig });
      dispatch({
        type: ACTIONS_TYPES.GET_SINGLE,
        payload: res?.data?.data || res?.data,
      });
    } catch (error) {
      setError(error);
    }
  };

  const post = async (body, postConfig) => {
    try {
      dispatch({ type: ACTIONS_TYPES.SET_LOADING });
      const res = await axios.post(url, body, { ...config, ...postConfig });
      dispatch({
        type: ACTIONS_TYPES.CREATE,
        payload: res.data?.data || res.data,
      });
    } catch (error) {
      setError(error);
    }
  };

  const put = async (id, body, putConfig) => {
    try {
      dispatch({ type: ACTIONS_TYPES.SET_LOADING });
      const res = await axios.put(url + id, body, {
        ...putConfig,
        ...config,
      });
      dispatch({
        type: ACTIONS_TYPES.UPDATE,
        payload: res.data?.data || res.data,
      });
    } catch (error) {
      setError(error);
    }
  };

  const del = async (id, delConfig) => {
    try {
      dispatch({ type: ACTIONS_TYPES.SET_LOADING });
      await axios.delete(`${url}/${id}`, { ...config, ...delConfig });
      dispatch({
        type: ACTIONS_TYPES.DELETE,
        payload: id,
      });
    } catch (error) {
      setError(error);
    }
  };

  const setError = (error) => {
    dispatch({ type: ACTIONS_TYPES.SET_ERROR, payload: error });
  };

  return {
    ...state,
    get,
    post,
    put,
    del,
    getSingle,
  };
};

export default useAPI;
