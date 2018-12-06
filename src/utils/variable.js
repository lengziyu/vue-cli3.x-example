
//全局变量
export default {
  install(Vue,options) {
    Vue.prototype.URL = {
          PIC: 'http://static.xx.com/',
    },

    Vue.prototype.WX = {
          appId: 'xx'
    }
  }
}
