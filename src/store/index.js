/*
* @Author: Zhang Guohua
* @Date:   2018-12-03 10:46:16
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-03 16:53:44
* @Description: create by zgh
* @GitHub: Savour Humor
*/
// 初始化
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 引入基础知识练习模块
import TestForm from './test_base/test_form';

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
	},
	plugins: []
});

export default store;
