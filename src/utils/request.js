// 对axios进行封装
import axios from 'axios'
// 请求拦截器 interceptors
axios.interceptors.request.use(function (config) {
  // 执行请求ok
//   config是axios的所有配置
  let token = window.localStorage.getItem('user-token')// 获取token
  config.headers.Authorization = `Bearer ${token}`// 统一注入token
  return config// 返回的config 就会作为新的请求选项去进行请求
}, function () {
// 执行请求失败
})
export default axios
