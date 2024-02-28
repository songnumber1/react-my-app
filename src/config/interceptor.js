import axiosInstance from './axois';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Interceptor = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance.interceptors.request.use(
      function (config) {
        dispatch({ type: 'loadingSlice/ISLOADING', payload: true });

        return config;
      },
      function (error) {}
    );

    axiosInstance.interceptors.response.use(
      function (response) {
        dispatch({ type: 'loadingSlice/ISLOADING', payload: false });

        return response;
      },
      function (error) {}
    );
  }, [dispatch]);
  return children;
};

export { Interceptor };
