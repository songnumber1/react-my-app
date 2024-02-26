import axiosInstance from './axois';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Interceptor = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onIncrease = () => {
      dispatch({ type: 'ISLOADING', payload: true });
    };

    axiosInstance.interceptors.request.use(
      function (config) {
        onIncrease();
        console.log('requestInterceptor');
        return config;
      },
      function (error) {}
    );

    axiosInstance.interceptors.response.use(
      function (response) {
        dispatch({ type: 'DECREASE' });
        console.log('responseInterceptor', response.data);
        return response;
      },
      function (error) {}
    );
  }, [dispatch]);
  return children;
};

export { Interceptor };
