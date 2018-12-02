/*
* @Author: Zhang Guohua
* @Date:   2018-11-12 19:40:19
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-02 16:51:24
* @Description: create by zgh
* @GitHub: Savour Humor
*/
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

// Router
import RouterHome from '@/components/router/RouterHome'
import NavGuards from '@/components/router/RouterNavGuards'
import GetData from '@/components/router/GetData'
import Scroll from '@/components/router/Scroll'

// iview
// template render
import TemplateRender from '@/components/iview/TemplateRender'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/router',
      components: {
        default: Home,
        router: RouterHome,
      }, 
      name: 'router',
      children: [{
        path: 'navGuards',
        components: {
          navguards: NavGuards
        },
        name: 'navguards'
      }],
    },

    //  iview template/render 模式
    {
      path: '/iview/tr',
      component: TemplateRender
    }

  ]
});

console.info(router);

// 注册前置守卫
router.beforeEach((to, from, next) => {
  console.log(to);
  next();
})

export default router

/*{
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
    },*/