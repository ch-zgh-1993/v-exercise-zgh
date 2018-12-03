<!--
* @Author: Zhang Guohua
* @Date:   2018-12-03 16:19:58
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-03 20:05:32
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<Form ref="formInline" inline>
        <FormItem prop="user">
        	<!-- 第一种
            <Input type="text" :value="message" @input="updateMessage" placeholder="请输入内容"> -->
            <!-- 第二种 -->
            <Input type="text" v-model="message" @input.native="testInput" placeholder="请输入内容">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
    </Form>
</template>
<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex';

// 试用理解 vuex 的 表单处理内容


// 在 vuex上使用 v-model
// 1. 使用 v-bind 绑定， event 提交。
// 2. 使用带有 setter 的双向绑定计算属性。
export default {
	name: 'BaseForm',
	data () {
		return {

		};
	},
	computed: {
		// 第一种
		// ...mapState( 'TestForm',{
		// 	message: state => state.inputMessage,
		// }),
		// 第二种
		message: {
			get() {
				return this.$store.state.TestForm.inputMessage;
			},
			set(value) {
				this.$store.commit('TestForm/updateMessage', value);
			}
		}
	},
	methods: {
		// 第一种
		// updateMessage(e) {
		// 	console.log(e)
		// 	 this.$store.commit('TestForm/updateMessage', e)
		// }
		
		// 测试 input 值、
		// 在组件上注册的 input 事件，应该是在 input 上触发了事件，所以值是框架定义好的。
		// 使用原生事件注册，将会触发在 input 上。
		testInput(event) {
			console.log(arguments);
		}
	}
}
</script>