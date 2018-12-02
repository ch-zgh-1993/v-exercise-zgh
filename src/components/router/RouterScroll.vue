<!--
* @Author: Zhang Guohua
* @Date:   2018-11-14 19:28:10
* @Last Modified by:   zgh
* @Last Modified time: 2018-11-14 19:28:51
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<div>
		滚动行为
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'Scroll'
	}

	// 滚动行为
	// 1. 原因： 当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 可以帮你做的更好。
	// 
	// 2. 注意： 这个功能只在支持 history.pushState 的浏览器中可用。
	// 3. 创建 router 实例时， 增加一个 scrollBehavior 方法。 
	// 
	
	// 滚动到顶点：
	// scrollBehavior (to, from, savedPosition) {
 	// 		return { x: 0, y: 0 }
	// }
	// 
	// 
	// 滚动到锚点
	// scrollBehavior (to, from, savedPosition) {
  	// 		if (to.hash) {
    // 			return {
    // 				selector: to.hash
    // 			}
   	//		}
 	//	}
 	//	
 	//	
 	//	
 	//	返回 savedPosition,像浏览器原生表现：
 	//	scrollBehavior (to, from, savedPosition) {
	//	  if (savedPosition) {
	//	    return savedPosition
	//	  } else {
	//	    return { x: 0, y: 0 }
	//	  }
	//	}
</script>