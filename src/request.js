import axios from 'axios'
// axios.defaults.withCredentials=true
const service=axios.create({
    //url = base url + reqeust url
    //服务器
    // baseURL : "http://39.101.136.206:8089",
    
    // baseURL : "http://192.168.123.46:8089",
    baseURL : "http://101.200.155.141:8089",
    // baseURL : "http://localhost:8089",
    // withCredentials:true,
    
    //配置请求超时时间
    timeout: 5000
})

export default service