/*
* @Author: Zhang Guohua
* @Date:   2018-11-12 19:40:19
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-03 13:19:08
* @Description: create by zgh
* @GitHub: Savour Humor
*/
import Vue from 'vue'
import Router from 'vue-router'

// 导入 router 列表
import List from '@/assets/js/list';

Vue.use(Router)

const router = new Router({
  routes: List.routerlist
});

console.info(router);

// 注册前置守卫
router.beforeEach((to, from, next) => {
  console.log(to);
  next();
})

export default router;
