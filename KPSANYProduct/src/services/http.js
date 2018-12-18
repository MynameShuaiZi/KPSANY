/**
 * create by zx on 2018/11/11 18:44
 * 类注释：http请求
 * 备注：
 */
import axios from 'axios'

const qs = require('qs');
const Http = axios;
// Http.defaults.baseURL = process.env.API_MAIN;//测试
// Http.defaults.baseURL = "http://10.6.60.249:8084/";//测试
// Http.defaults.baseURL = "http://h5.sdrcu.com/mobile";//测试
Http.defaults.timeout = 1000 * 30;//设置超时
//请求拦截
Http.interceptors.request.use(config => {
  const method = config.method;
  if (method === 'post' || method === 'put') {
    if (config.format && config.format === 'json') {
      config.headers['Content-Type'] = 'application/json'
    } else {
      config.data = qs.stringify(config.data)
    }
  }
  console.log(`%c请求:${config.url}`, 'color:DodgerBlue', config)
  return config
}, error => {
  return Promise.reject(error)
})

//响应拦截
Http.interceptors.response.use(response => {
  console.log(`%c响应:${response.config.url}`, 'color:red', response.data)
  return response.data
}, error => {
  return Promise.reject(error)
});

export default Http
