<!--
* @Author: Zhang Guohua
* @Date:   2018-11-13 16:17:39
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-02 16:11:38
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<p>Nav Guards(导航守卫)</p>
</template>

<script type="text/javascript">
	export default {
		name: 'NavGuards'
	}

	// 导航守卫：
	// 1. 意义： '导航表示路由正在发生改变',导航守卫主要用来通过跳转或取消的方式守卫导航
	// 
	// 2. 植入： 全局的, 单个路由独享的, 或者组件级的。
	// 3. 理念： 参数或查询的改变并不会触发进入/离开的导航守卫。可以通过观察 $route 来应对这些变化。或使用 beforeRouteUpdate 的组件内守卫。
	// 4. 全局守卫 
	// 		1. 前置守卫
	// 		2. 解析守卫
	// 		3. 后置钩子
	// 		
	// 5. 路由独享的守卫
	// 6. 组件内守卫
	// 
	// 7. 导航解析流程
	// 导航被触发。
	// 在失活的组件里调用离开守卫。
	// 调用全局的 beforeEach 守卫。
	// 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
	// 在路由配置里调用 beforeEnter。
	// 解析异步路由组件。
	// 在被激活的组件里调用 beforeRouteEnter。
	// 调用全局的 beforeResolve 守卫 (2.5+)。
	// 导航被确认。
	// 调用全局的 afterEach 钩子。
	// 触发 DOM 更新。
	// 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
	 
	
	// const router = new VueRouter({
	// 	routes: []
	// });

	// 注册全局前置守卫
	// 1. 当一个导航触发时，全局前置守卫按照创建顺序调用。
	// 2. 守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。
	// params:
	// 		to: Route对象
	// 		from: Route对象
	// 		next: Function 调用方法 resolve 钩子，
	// 			next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
	// 			next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
	// 			next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
	// 			next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
	// 	
	// 3. 确保调用 next()， 否则钩子将不会被 resolved。
	// 
	// router.beforeEach((to, from, next) => {

	// });

	// 全局解析守卫
	// 区别在于， 是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
	// router.beforeResolve((to, from, next) => {

	// });


	// 全局后置钩子
	// 和守卫不同，钩子不接受 next ， 也不会改变导航本身。
	// router.afterEach((to, from) => {

	// });

	// 可以直接在路由配置上直接定义 beforeEnter 守卫。
	// 参数同 前置守卫。
	// {
    // 		path: '/foo',
    // 		component: Foo,
    // 		beforeEnter: (to, from, next) => {
    //  		 // ...
    // }

    // 组件内守卫
    // 可以在路由组件内直接定义组件内守卫：
 //    const Foo = {
	//   template: `...`,
	//   beforeRouteEnter (to, from, next) {
	//     // 在渲染该组件的对应路由被 confirm 前调用
	//     // 不！能！获取组件实例 `this`
	//     // 因为当守卫执行前，组件实例还没被创建
	    
	//     // 可以通过传递 回调给 next 进行访问 组件实例
	//     // 另外两个不支持回调。
	//     next(vm => {
	//     	// ..
	//     });
	//   },
	//   beforeRouteUpdate (to, from, next) {
	//     // 在当前路由改变，但是该组件被复用时调用
	//     // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
	//     // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
	//     // 可以访问组件实例 `this`
	//   },
	//   beforeRouteLeave (to, from, next) {
	//     // 导航离开该组件的对应路由时调用
	//     // 可以访问组件实例 `this`
	    
	//     // 离开守卫长用在 用户还未保存修改前离开。该导航可以通过 next(false) 取消。
	//   }
	// }
</script>