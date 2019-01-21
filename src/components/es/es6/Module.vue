<!--
* @Author: Zhang Guohua
* @Date:   2019-01-21 10:26:21
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-21 17:37:18
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<div>
		<h3>module 的测试</h3>
	</div>
</template>

<script>
// Module 的一些测试。
//  
//  	1. import {name as newName} , 之前以为反了。。
// 

import { task_detail as obj1 } from '@/assets/es/module';
import { task as obj } from '@/assets/es/module';
console.info(obj);
console.log(obj1);

export default {
	name: 'ES6',
}
</script>

<style lang="scss" scoped>

</style>
