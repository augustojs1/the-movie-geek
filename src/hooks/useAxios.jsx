import React from 'react';
import { api } from '../services/api';

const useAxios = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url) => {
    let response;
    try {
      setError(null);
      setLoading(true);
      response = await api.get(url);
      if (response && response.status !== 200)
        throw new Error('Request has failed!');
    } catch (err) {
      response = null;
      setError(err.message);
    } finally {
      setData(response.data);
      setLoading(false);
      return response;
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useAxios;
