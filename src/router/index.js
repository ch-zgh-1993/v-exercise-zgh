/*
* @Author: Zhang Guohua
* @Date:   2018-11-12 19:40:19
* @Last Modified by:   zgh
* @Last Modified time: 2018-11-13 19:33:59
* @Description: create by zgh
* @GitHub: Savour Humor
*/
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import navGuards from '@/components/NavGuards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },{
    	path: '/navGuards',
      component: navGuards
    }
  ]
})
