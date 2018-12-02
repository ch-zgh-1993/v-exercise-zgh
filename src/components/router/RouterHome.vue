<!--
* @Author: Zhang Guohua
* @Date:   2018-12-02 15:31:13
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-02 17:09:24
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<div>
		<h2>Router 相关内容</h2>
		<router-view class="content" />
	</div>
</template>
<script>
	export default {
		name: 'RouterHome'
	}
</script>

<style scoped>
	.content {
		padding: 20px;
	}
</style>