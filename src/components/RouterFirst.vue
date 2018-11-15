<!--
* @Author: Zhang Guohua
* @Date:   2018-11-15 19:09:16
* @Last Modified by:   zgh
* @Last Modified time: 2018-11-15 19:13:13
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<div>
		<p>
			<router-link to="/nav">Nav</router-link>
			<router-link to="/nav/head">Head</router-link>
		</p>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">

	import router from '../router/index.js'

	export default {
		name: 'RouterFirst'
	}


	// 定义路由时配置 meta 字段。
	// 意义： routes 配置中的每个路由对象为 路由记录。路由记录可以是嵌套的，因此，当一个路由匹配成功后，他可能匹配多个路由记录。一个路由匹配到的所有路由记录会暴露为 $route 对象 (还有在导航守卫中的路由对象) 的 $route.matched 数组。因此，我们需要遍历 $route.matched 来检查路由记录中的 meta 字段。
	// 
	// 1. 当 matched 匹配到多个记录时， 检查meta 字段。
	// 
	const Nav = {
		template: '<p>nav</p>'
	}

	const Head = {
		template: '<p>head</p>'
	}

	router.routes.push({
		path: '/nav',
		compontent: Nav,
		children: [{
			path: 'head',
			compontent: Head,
			// meta 配置
			meta: {
				head: true
			}
		}]
	})

	// 注册全局前置守卫
	router.beforeEach((to, from, next) => {
		if (to.matched.some(record => {
			console.log(record);
			return record.meta.head
		})) {
		    // this route requires auth, check if logged in
		    // if not, redirect to login page.
		    if (true) {
		      next({
		        path: '/login',
		        query: { redirect: to.fullPath }
		      })
		    } else {
		      next()
		    }
		  } else {
		    next() // 确保一定要调用 next()
		  }
	});
</script>