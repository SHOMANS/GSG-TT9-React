import axios from 'axios';
import { useState } from 'react';

const useAPI = (url, config) => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const get = async (getConfig) => {
    try {
      setIsLoading(true);
      const res = await axios.get(url, { ...config, ...getConfig });

      setData(res?.data?.data || res?.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSingle = async (id, getConfig) => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${url}/${id}`, { ...config, ...getConfig });
      setItem(res?.data?.data || res?.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const post = async (body, postConfig) => {
    try {
      setIsLoading(true);
      const res = await axios.post(url, body, { ...config, ...postConfig });
      setData((prevState) => [...prevState, res.data?.data || res.data]);
      setMessage('Success!');
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const put = async (id, body, putConfig) => {
    try {
      setIsLoading(true);
      const res = await axios.put(url + id, body, {
        ...putConfig,
        ...config,
      });
      setData((prevState) =>
        prevState.map((item) => (item.id === body.id ? res.data.data : item))
      );
      setMessage('Success!');
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const del = async (id, delConfig) => {
    try {
      setIsLoading(true);
      await axios.delete(`${url}/${id}`, { ...config, ...delConfig });
      setData((prevState) => prevState.filter((item) => item.id !== id));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
    message,
    get,
    post,
    put,
    del,
    getSingle,
    item,
  };
};

export default useAPI;
