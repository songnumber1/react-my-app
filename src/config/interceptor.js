import axiosInstance from './axois';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadingSliceAction } from './../modules/loading';

const Interceptor = ({ children }) => {
  // const isLoading = useSelector(state => state.loading.isLoading);
  const isLoading = useSelector(state => state.loading.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance.interceptors.request.use(
      function (config) {
        console.log('requestDispatch', isLoading);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        dispatch({ type: 'loadingSlice/ISLOADING', payload: true });

        console.log('requestDispatch1', isLoading);

        return config;
      },
      function (error) {}
    );

    axiosInstance.interceptors.response.use(
      function (response) {
        console.log('responseDispatch', isLoading);
        dispatch({ type: 'loadingSlice/ISLOADING', payload: false });
        console.log('responseDispatch1', isLoading);
        return response;
      },
      function (error) {}
    );
  }, [dispatch]);
  return children;
};

export { Interceptor };
