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
// 响应拦截
axios.interceptors.response.use(function (response) {
  // 成功时执行
  return response.data ? response.data : {}// 解决data 不存在时 then中读取数据报错问题
}, function () {
  // 失败时执行 状态码 不是200 或者201/204
})
export default axios
