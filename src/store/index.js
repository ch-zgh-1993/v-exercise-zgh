/*
* @Author: Zhang Guohua
* @Date:   2018-12-03 10:46:16
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-11 14:51:06
* @Description: create by zgh
* @GitHub: Savour Humor
*/
// 初始化
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


// Vuex 模块使用。
// 引入基础知识练习模块
import TestForm from './test_base/test_form';
// 引入核心概念理解
import KeyKnown from './核心概念理解/state.js';

const store = new Vuex.Store({
	state: {

	},
	getters: {

	},
	mutations: {

	},
	actions: {

	},
	modules: {
		TestForm,
		KeyKnown,
	},
	plugins: []
});

export default store;
