// axios进行全局配置，请求错误的时候，自动触发3次
import axios from 'axios';
// 整体进行封装一下
axios.defaults.retry = 3;
axios.defaults.retryDelay = 1000;

export const request = axios.create({
  baseURL: '',
  timeout: 10000,
});
// 请求拦截
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 响应拦截
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
