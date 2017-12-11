import axios from 'axios';
import qs from 'qs';

axios.defaults.headers.post['data-Type'] = 'json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  return response;
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

function fetch_get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      }).then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  });
}

function fetch_post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error);
      })
  });
}

export { fetch_get, fetch_post };
