<!--
* @Author: Zhang Guohua
* @Date:   2018-11-14 19:24:35
* @Last Modified by:   zgh
* @Last Modified time: 2018-11-14 19:25:31
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<div>
		数据获取
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'GetData'
	}

	// 数据获取
	// 1. 内容，进入路由后，需要从服务器获取数据信息。
	// 2. 时间节点： 
	// 		1. 导航完成之后获取：先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示“加载中”之类的指示。
	// 		2. 导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。可以显示加载条在页面上方。
	// 		3. 区别： 技术角度，两种都是不错的。


	// 导航后获取：
	// 1. 马上导航和渲染组件，然后在组件的 created 钩子中获取数据。这让我们有机会在数据获取期间展示一个 loading 状态，还可以在不同视图间展示不同的 loading 状态。
	// 
	// 
	

	// 导航完成前获取：
	// 1. 在导航转入新的路由前获取数据。我们可以在接下来的组件的 beforeRouteEnter 守卫中获取数据，当数据获取成功后只调用 next 方法。
	// 2. 在为后面的视图获取数据时，用户会停留在当前的界面，因此建议在数据获取期间，显示一些进度条或者别的指示。如果数据获取失败，同样有必要展示一些全局的错误提醒。
</script>