import axios from 'axios';
import { useReducer } from 'react';

const ACTIONS_TYPES = {
  REQUEST_START: 'Request_Start',
  REQUEST_SUCCESS: 'Request_Success',
  REQUEST_FAILURE: 'Request_Failure',
  REQUEST_SUCCESS_SINGLE_ITEM: 'Request_Success_Single_Item',
  REQUEST_SUCCESS_POST: 'Request_Success_Post',
  REQUEST_SUCCESS_PUT: 'Request_Success_Put',
  REQUEST_SUCCESS_DELETE: 'Request_Success_Delete',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.REQUEST_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ACTIONS_TYPES.REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ACTIONS_TYPES.REQUEST_SUCCESS_SINGLE_ITEM:
      return {
        ...state,
        isLoading: false,
        item: action.payload,
      };

    case ACTIONS_TYPES.REQUEST_SUCCESS_POST:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
        message: 'Success!',
      };

    case ACTIONS_TYPES.REQUEST_SUCCESS_PUT:
      return {
        ...state,
        isLoading: false,
        data: state.data.map((item) =>
          item.id === action.payload.id ? action.payload.data : item
        ),
        message: 'Success!',
      };

    case ACTIONS_TYPES.REQUEST_SUCCESS_DELETE:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((item) => item.id !== action.payload),
        message: 'Success!',
      };

    default:
      return state;
  }
};

const initialState = {
  isLoading: false,
  data: [],
  error: null,
  message: '',
  item: null,
};

const useAPI = (url, config) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const get = async (getConfig) => {
    try {
      dispatch({ type: ACTIONS_TYPES.REQUEST_START }); // no need for payload
      const res = await axios.get(url, { ...config, ...getConfig });
      dispatch({
        type: ACTIONS_TYPES.REQUEST_START,
        payload: res?.data?.data || res?.data,
      });
    } catch (error) {
      dispatch({ type: ACTIONS_TYPES.REQUEST_FAILURE, payload: error });
    }
  };

  const getSingle = async (id, getConfig) => {
    try {
      dispatch({ type: 'Request_Start' });
      const res = await axios.get(`${url}/${id}`, { ...config, ...getConfig });
      dispatch({
        type: ACTIONS_TYPES.REQUEST_SUCCESS_SINGLE_ITEM,
        payload: res?.data?.data || res?.data,
      });
    } catch (error) {
      dispatch({ type: ACTIONS_TYPES.REQUEST_FAILURE, payload: error });
    }
  };

  const post = async (body, postConfig) => {
    try {
      dispatch({ type: 'Request_Start' });

      const res = await axios.post(url, body, { ...config, ...postConfig });
      dispatch({
        type: ACTIONS_TYPES.REQUEST_SUCCESS_POST,
        payload: res?.data?.data || res?.data,
      });
    } catch (error) {
      dispatch({ type: ACTIONS_TYPES.REQUEST_FAILURE, payload: error });
    }
  };

  const put = async (id, body, putConfig) => {
    try {
      dispatch({ type: 'Request_Start' });

      const res = await axios.put(url + id, body, {
        ...putConfig,
        ...config,
      });

      dispatch({
        type: ACTIONS_TYPES.REQUEST_SUCCESS_PUT,
        payload: { id: body.id, data: res?.data?.data || res?.data },
      });
    } catch (error) {
      dispatch({ type: ACTIONS_TYPES.REQUEST_FAILURE, payload: error });
    }
  };

  const del = async (id, delConfig) => {
    try {
      dispatch({ type: 'Request_Start' });

      await axios.delete(`${url}/${id}`, { ...config, ...delConfig });

      dispatch({ type: ACTIONS_TYPES.REQUEST_SUCCESS_DELETE, payload: id });
    } catch (error) {
      dispatch({ type: ACTIONS_TYPES.REQUEST_FAILURE, payload: error });
    }
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
