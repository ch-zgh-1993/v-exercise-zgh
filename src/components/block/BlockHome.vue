<!--
* @Author: Zhang Guohua
* @Date:   2019-01-16 16:59:29
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-16 17:04:33
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<div>
		<h3>{{ info }}</h3>
		<router-view />
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'BlockHome',
	data() {
		return {
			info: '这里是代码块的聚集地，主要用来练习，存储，测试，使用的，即将使用的，想到的一些具体功能的实现。并做以保留。'
		};
	}
};
</script>