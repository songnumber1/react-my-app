import axiosInstance from './axois';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase } from '../modules/counter';

const Interceptor = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onIncrease = () => {
      dispatch(increase());
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
