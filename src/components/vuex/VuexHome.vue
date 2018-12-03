<!--
* @Author: Zhang Guohua
* @Date:   2018-12-03 16:27:23
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-03 16:29:55
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<div>
		<h3>{{ title }}</h3>
		<router-view></router-view>
	</div>
</template>
<script>

export default {
	name: 'VuexHome',
	data () {
		return {
			title: 'Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式'
		}
	}
}
</script>