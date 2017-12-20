// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/vuex.js'
import requier from './require'
import * as filters from './filter'

Vue.config.productionTip = false
Vue.prototype.apiServer = requier
//单个过滤器注册
// Vue.filter('changeHexEls', function (val) {
//   if (!val) {
//     return ''
//   }
//   if (val < 10000) {
//     return val
//   } else {
//     return (val / 10000).toFixed(4)
//   }
// })
//遍历每一个过滤器并注册封装模块化
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
