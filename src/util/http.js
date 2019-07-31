import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true; //配置允许跨域携带cookie
axios.defaults.timeout = 5000; //配置超市时间
axios.defaults.baseURL = 'http://180.167.48.172:8861/';
//请求拦截
axios.interceptors.request.use(
  config => {
    if(localStorage.getItem('ReactToken')) {
      config.headers['Authorization'] = localStorage.getItem('ReactToken')
    }
    return config
  },
  error => {
    console.log("请求超时");
    return Promise.reject(error)
  },
);

//返回后拦截
axios.interceptors.response.use(
  data =>{
    return data;
  },
  error => {
    if(error.response.status === 504 || error.response.status === 404){
      console.log("服务器被吃了")
    }else if (error.response.status === 401){
      console.log("登录信息失效")
    }else if(error.response.status === 500){
      console.log("服务器开小差了")
    }
    return Promise.reject(error)
  }
);

export default axios
