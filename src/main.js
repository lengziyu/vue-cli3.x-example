import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'
import 'normalize.css'

Vue.config.productionTip = false


// 全局变量
import variable from './utils/variable'
Vue.use(variable);

// 全局函数
import util from './utils/util'
Vue.use(util);

// rem 适配
import 'amfe-flexible';

Vue.use(util);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
