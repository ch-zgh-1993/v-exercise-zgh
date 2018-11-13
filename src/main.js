/*
* @Author: Zhang Guohua
* @Date:   2018-11-12 19:40:19
* @Last Modified by:   zgh
* @Last Modified time: 2018-11-13 19:08:01
* @Description: create by zgh
* @GitHub: Savour Humor
*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
