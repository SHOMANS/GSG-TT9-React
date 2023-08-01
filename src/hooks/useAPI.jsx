import axios from 'axios';
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'Request_Start':
      return {
        ...state,
        isLoading: true
      };
    case 'Request_Success':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case 'Request_Failure':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case 'Request_Success_Single_Item':
      return {
        ...state,
        isLoading: false,
        item: action.payload
      };

    case 'Request_Success_Post':
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
        message: 'Success!'
      };

    case 'Request_Success_Put':
      return {
        ...state,
        isLoading: false,
        data: state.data.map((item) => (item.id === action.payload.id ? action.payload.data : item)),
        message: 'Success!'
      };
    
    case 'Request_Success_Delete':
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((item) => item.id !== action.payload),
        message: 'Success!'
      };
    
      default:
        return state;
  }
}

const initialState = {
  isLoading: false,
  data: [],
  error: null,
  message: '',
  item: null
}

const useAPI = (url, config) => {

  const [state,dispatch] = useReducer(reducer, initialState)

  const get = async (getConfig) => {
    try {
      dispatch({type: 'Request_Start'}) // no need for payload

      const res = await axios.get(url, { ...config, ...getConfig });

      dispatch({type: 'Request_Success', payload: res?.data?.data || res?.data})
    } catch (error) {
      dispatch({type: 'Request_Failure', payload: error})
    }
  };

  const getSingle = async (id, getConfig) => {
    try {
      dispatch({type: 'Request_Start'})
      
      const res = await axios.get(`${url}/${id}`, { ...config, ...getConfig });
      dispatch({type: 'Request_Success_Single_Item', payload: res?.data?.data || res?.data})
    } catch (error) {
      dispatch({type: 'Request_Failure', payload: error})
    }
  };

  const post = async (body, postConfig) => {
    try {
      dispatch({type: 'Request_Start'})

      const res = await axios.post(url, body, { ...config, ...postConfig });
      dispatch({type: 'Request_Success_Post', payload: res?.data?.data || res?.data})
    } catch (error) {
      dispatch({type: 'Request_Failure', payload: error})
    }
  };

  const put = async (id, body, putConfig) => {
    try {
      dispatch({type: 'Request_Start'})

      const res = await axios.put(url + id, body, {
        ...putConfig,
        ...config,
      });

      dispatch({type: 'Request_Success_Put', payload: {id: body.id, data: res?.data?.data || res?.data}})
      
    } catch (error) {
      dispatch({type: 'Request_Failure', payload: error})
    }
  };

  const del = async (id, delConfig) => {
    try {
      dispatch({type: 'Request_Start'})
      
      await axios.delete(`${url}/${id}`, { ...config, ...delConfig });
      
      dispatch({type: 'Request_Success_Delete', payload: id})
    } catch (error) {
      dispatch({type: 'Request_Failure', payload: error})
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
