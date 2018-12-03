/*
* @Author: Zhang Guohua
* @Date:   2018-12-03 10:54:13
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-03 19:15:45
* @Description: create by zgh
* @GitHub: Savour Humor
*/

// 模块内
// 
// getters: 
// 		params: (state, getters, rootState)
// 			state: 模块的局部状态对象
// 			rootState: 根节点的状态
// 			
// 默认情况下，模块内的 action, mutation, getter 注册在全局。
// 

const TestForm = {
	namespaced: true,
	state: {
		inputMessage: 'zz',
	},
	getters: {
		messageWrapper (state, getters) {
			return state.inputMessage;
		},
	},
	mutations: {
		updateMessage (state, message) {
		    state.inputMessage = message
		}
	}
};

export default TestForm;