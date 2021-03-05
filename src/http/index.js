/*
 * @Author: your name
 * @Date: 2021-02-22 08:57:59
 * @LastEditTime: 2021-02-22 09:05:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-server_finale:\有关JS、vue的练习\vue练习\vue外卖项目练习\takeout\src\http\index.js
 */
import axios from 'axios'
export default function(config){
    const instance = axios.create({
        baseURL: '/api',
        // timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'}
      });

      // 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  return instance(config)
}