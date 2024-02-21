import axios from 'axios';

// 요청(request) interceptor
axios.interceptors.request.use(
  function (request) {
    console.log('axios interceptors request');
    // 요청을 보내기 전 수행할 작업
    return request;
  },
  function (error) {
    // 에러에 대한 처리
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    console.log('axios interceptors response');
    // 200대 response를 받아 응답 데이터를 가공하는 작업
    return response;
  },
  function (error) {
    // 200대 이외의 에러 응답을 가공
    return Promise.reject(error);
  }
);

export default axios;
