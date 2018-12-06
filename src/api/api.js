import axios from 'axios'
import qs from 'qs'

import * as _ from '../utils/util'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'https://easy-mock.com/mock/5c08897582538f1a07bc87cd/yhby_copy';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
     // _.toast("错误的传参", 'fail');
     console.log('错误的传参');
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    if(!res.data.success){
        // _.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    // _.toast("网络异常", 'fail');
    console.log('网络异常');
    return Promise.reject(error);
});

export function fetch(url, method, params) {
    return new Promise((resolve, reject) => {
      if(method == 'post'){
        axios.post(url, params)
          .then(response => {
              resolve(response.data);
          }, err => {
              reject(err);
          })
          .catch((error) => {
             reject(error)
          })
      }else if(method == 'get'){
        axios.get(url, {
            params: params
          })
          .then(response => {
              resolve(response.data);
          }, err => {
              reject(err);
          })
          .catch((error) => {
             reject(error)
          })
        }
    })
}

export default {
    /**
     * 测试
     */
    Test(params) {
        return fetch('/test', 'get', params)
    }
}
