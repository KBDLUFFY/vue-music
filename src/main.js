// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import router from './router'
//插件安装
// axios
import axios from 'axios' 
Vue.prototype.$axios = axios
// flexible
import 'lib-flexible/flexible'
// 移动端点击延迟300毫秒解决方案
import FastClick from 'fastclick'
FastClick.attach(document.body);
//引入样式文件
import 'common/stylus/index.styl'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
