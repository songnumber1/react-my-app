import axiosInstance from './axois';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadingSliceAction } from './../modules/loading';

const Interceptor = ({ children }) => {
  const isLoading = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance.interceptors.request.use(
      function (config) {
        console.log('requestDispatch', isLoading);
        dispatch({ type: loadingSliceAction.ISLOADING, payload: true });
        console.log('requestDispatch', isLoading);

        return config;
      },
      function (error) {}
    );

    axiosInstance.interceptors.response.use(
      function (response) {
        console.log('responseDispatch', isLoading);
        return response;
      },
      function (error) {}
    );
  }, [dispatch, isLoading]);
  return children;
};

export { Interceptor };
