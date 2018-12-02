<!--
* @Author: Zhang Guohua
* @Date:   2018-11-15 19:12:46
* @Last Modified by:   zgh
* @Last Modified time: 2018-11-15 19:15:59
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<p>
		<router-link to="/">trans #aaa</router-link>
		<router-link to="/base/blue">trans blue</router-link>
		<router-link to="/base/orange">trans orange</router-link>
	</p>

	<!-- 给基础组件设置相同的路由效果 -->
	<transition>
		<router-view></router-view>
	</transition>
	<router-view name="orange"></router-view>
</template>

<script type="text/javascript">

	import router from '../router/index.js'

	export default {
		name: 'Transition'
	}

	// 1. router-view 是基本的动态组件，可以用 transition 给元素添加过渡效果。
	// 2. 效果设置
	// 		1. 所有一起设置
	// 		2. 单个路由的过渡
	// 		3. 基于路由的动态过渡

	const A = {
		template: '<div class="base"></div>'
	};

	const B = {
		template: '<div class="base blue"></div>'
	};

	let routes = router.routes;

	routes.push({
		path: '',
		component: A
	});
	routes.push({
		path: '/base/blue',
		component: B
	});

	// 1. 所有路由设置一样的过渡效果
	
	// 2. 单个路由的过渡
	// 可以在各路由组件内使用 <transition> 并设置不同的 name。
	routes.push({
		path: '/base/orange',
		components: {
			default: {
				template: '<div class="base"></div>'
			},
			orange: {
				template: `
					<transition name="orange">
						<div class="base orange"></div>
					</transition>
				`
			}
		}
	});

	// 基于路由的动态过渡
	// 使用路由名字，动态改变过渡效果。 即使用动态的 transition:name
	// 在父组件， watch $route 决定使用哪种过渡效果。
</script>


<style type="text/css">
	.base {
		position: relative;
		width: 1000px;
		height: 200px;
		background: #ccc;
	}

	.blue {
		background: blue;
	}

	.orange {
		background: orange;
	}

	/*默认渲染view的过渡*/
	.v-enter {
		width: 100px;
	}
	.v-enter-active {
		transition: all 1s ease;
	}
	.v-enter-to {
		width: 1000px;
	}
	.v-leave {
		transition: all 1s ease;
	}
	.v-leave-active {
		width: 100px;
	}

	/*单个路由的过渡*/
	.orange-enter {
		opacity: 0;
	}
	.orange-enter-active {
		transition: all 1s ease;
	}
	.orange-enter-to {
		opacity: 1;
	}
	.orange-leave {
		transition: all 1s ease;
	}
	.orange-leave-active {
		opacity: 0;
	}
</style>