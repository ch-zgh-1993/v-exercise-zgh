<!--
* @Author: Zhang Guohua
* @Date:   2018-12-11 14:37:33
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-11 15:30:45
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<div>
		<p>module name is: {{ name }}</p>
		<input type="button" value="改变名字" @click="chagneName">
	</div>
</template>
<script>
// state
// 		1. 当 state 中属性的 属性 改变时，是否会更新 computed。 会。

import { mapState } from 'vuex';

export default {
	name: 'state',
	computed: {
		...mapState('KeyKnown', {
			name(state) {
				return state.moreStates.name;
			},
		}),
	},
	methods: {
		chagneName() {
			this.$store.commit({
				type: 'KeyKnown/updateMoreStates'
			})
		},
	},
};
</script>