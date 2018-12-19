// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/style/reset.css'
import store from './store'
import api from './services/api'


Vue.config.productionTip = false
import FastClick from 'fastclick'
FastClick.attach(document.body);
/* eslint-disable no-new */
Vue.prototype.$api=api;


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
