/*
* @Author: Zhang Guohua
* @Date:   2018-12-11 13:35:38
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-11 15:02:07
* @Description: create by zgh
* @GitHub: Savour Humor
*/

// 关于 state 自己的理解
// state: 全部应用层级的状态，单一状态树，一个对象。
// 
// 	 1. 是否可以嵌套对象，或者组件依赖对象中的对象的属性。
// 	 	1. 当组件中监听的属性变化时， 是否会引发事件响应。会的。
//
	  	 
export default {
	namespaced: true,
	state: {
		moreStates: {
			name: 'test',
		},
	},
	mutations: {
		updateMoreStates(state, paylod) {
			state.moreStates.name = 'zzz';
		},
	},
};