<!--
* @Author: Zhang Guohua
* @Date:   2018-12-11 14:37:33
* @Last Modified by:   zgh
* @Last Modified time: 2019-04-28 14:11:21
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<div>
		<p>module name is: {{ name }}</p>
		<input type="button" value="改变名字" @click="chagneName">
		<p>这是namespace getter 的读取 {{ add }}</p>
	</div>
</template>
<script>

import { mapState } from 'vuex';

// state
// 		1. 当 state 中属性的 属性 改变时，是否会更新 computed。 会。


// namespace 读取与未加相同，但可以通过其他方式读取。
import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('KeyKnown');

export default {
	name: 'state',
	computed: {
		...mapState('KeyKnown', {
			name(state) {
				return state.moreStates.name;
			},
		}),
		...mapGetters({
			add: 'addCount'
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