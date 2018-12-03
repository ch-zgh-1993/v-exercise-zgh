<!--
* @Author: Zhang Guohua
* @Date:   2018-12-03 20:17:52
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-03 20:39:54
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<div>
		<h4>组件内容分析，解析</h4>
		<Input @input="change" />
	</div>
</template>
<script>
// 组件内容解析，分析


// Input
import { Input } from 'iview';
console.log(Input);
// 应该是通过 $listeners 获取父组件上的事件，然后加在 input 上，触发事件，可能加了默认参数。
// 但是 .native 又是怎么加进去的？？
// 这是比较神奇的点。

export default {
	name: 'ComponentParse',
	methods: {
		change(v) {
			console.log(v);
		}
	}
}
</script>