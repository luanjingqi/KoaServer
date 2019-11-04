
 import baseURL from '../baseURL'; // 导入接口域名列表
 import axios from '../http'; // 导入http中创建的axios实例
 
 const login = {
     // 不带参数
     login () {
         return axios.get(`${baseURL.dev}/login`);
     },
    //  // 带参数get请求
    //  login (params) {
    //      return axios.get(`${baseURL.dev}/login/${id}`, {
    //          params: params
    //      });
    //  },
    //  // 带参数post请求
    //  login (params) {
    //      return axios.post(`${baseURL.dev}/login`, {
    //          params:params
    //      });
    //  }
 }
 
 export default login;