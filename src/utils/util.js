
//全局函数
export default {

  install(Vue, options) {
    /**
    *  储存localStorage
    */
    Vue.prototype.setlocalStorage = (storeName, storeData) => {
      var storeStr = JSON.stringify(storeData);
      var storeArr = window.localStorage.setItem(storeName, storeStr);
      return storeArr;
    },
    /**
    *  获取localStorage
    */
    Vue.prototype.getlocalStorage = (storeName, storeData) => {
      var storeName = localStorage.getItem(storeName);
    	var storeArr = JSON.parse(storeName)
    	return storeArr;
    },
    /**
    *  判断是否是微信端
    */
    Vue.prototype.isWeixin = () => {
      const ua = window.navigator.userAgent.toLowerCase();
      if(ua.match(/MicroMessenger/i) == 'micromessenger'){
          return true;
      } else {
          return false;
      }
    },
    /**
    *  获取url后面的参数
    */
    Vue.prototype.getUrlParams = (name) => {
      var _reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"),
          _regNext = window.location.search.substr(1).match(_reg);
      if (_regNext != null) return decodeURI(_regNext[2]) || '';
      else return '';
    },

    /**
    *  获取token
    */
    Vue.prototype.getToken = () => {
      var userInfo = JSON.parse(localStorage.getItem('userInfo'))
      return userInfo.token;
    },

    /**
    *  手机号码正则
    */
    Vue.prototype.regexPhone = () => {
      return /^0?(13[0-9]|15[0-9]|18[0-9]|14[0-9]|17[0-9])[0-9]{8}$/
    },

    /**
    *  需要APP
    */
    Vue.prototype.TipsDownApp = () => {
      alert('请下载APP，在APP进行此操作！')
      console.log(this)
      // this.$vux.toast.show({
      //  text: 'Loading'
      // })
    },

    /**
    *  暂未上线
    */
    Vue.prototype.TipsNotLine = () => {
      alert('功能开发中，稍后开发！')
    },


    /**
    *  tags逗号隔开
    */
    Vue.prototype.splitTags = (str) => {
      if(str){
        if(str.indexOf(',')){
          var strs = str.split(",");
          return strs
        }else{
          return str
        }
      }
    },

    /**
    *  判断是安卓还是ios端
    */
    Vue.prototype.navigatorAgent = () => {
      var u = navigator.userAgent,
        isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if(isIOS){
          return true
        }else{
          return false
        }
    }
  }
}
