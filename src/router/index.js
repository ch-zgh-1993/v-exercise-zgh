/*
* @Author: Zhang Guohua
* @Date:   2018-11-12 19:40:19
* @Last Modified by:   zgh
* @Last Modified time: 2018-11-22 18:08:34
* @Description: create by zgh
* @GitHub: Savour Humor
*/
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import navGuards from '@/components/NavGuards'
import GetData from '@/components/GetData'
import Scroll from '@/components/Scroll'

// iview
// template render
import TemplateRender from '@/components/iview/TemplateRender'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },{
      path: '/navGuards',
        components: {
          default: Home,
          navGuards: navGuards
        },
        name: 'navGuards'
    },{
      path: '/GetData',
        components: {
          default: Home,
          navGuards: GetData
        },
        name: 'GetData'
    },{
      path: '/Scroll',
        components: {
          default: Home,
          navGuards: Scroll
        },
        name: 'Scroll'
    },

    //  iview template/render 模式
    {
      path: '/iview/tr',
      component: TemplateRender
    }
  ]
})

console.info(router);

// 注册前置守卫
router.beforeEach((to, from, next) => {
  console.log(to);
  next();
})

export default router
