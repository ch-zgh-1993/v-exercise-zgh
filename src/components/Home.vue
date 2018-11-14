<!--
* @Author: Zhang Guohua
* @Date:   2018-11-13 16:18:10
* @Last Modified by:   zgh
* @Last Modified time: 2018-11-14 19:14:53
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<div>{{ content }}</div>
</template>

<script type="text/javascript">
	import Router from "../router/index.js"

	export default {
		name: 'Home',
		data () {
			return {
				content: ''
			}
		},
		watch: {
			'$route' (to) {
				if(to.name){
					this.content = to.name;
				}else{	
					this.content = 'Router 进阶教程练习'
				}
			}
		}
	}
</script>