/*
* @Author: Zhang Guohua
* @Date:   2018-12-03 11:18:34
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-21 11:16:05
* @Description: create by zgh
* @GitHub: Savour Humor
*/
//  Home
import Home from '@/components/Home'

// Router 相关
import RouterHome from '@/components/router/RouterHome'
import NavGuards from '@/components/router/test_base/RouterNavGuards'
import GetData from '@/components/router/test_base/RouterGetData'
import Scroll from '@/components/router/test_base/RouterScroll'

// iview 相关
// template render
import IviewHome from '@/components/iview/IviewHome'
import TemplateRender from '@/components/iview/TemplateRender'
import ComponentParse from '@/components/iview/ComponentParse'

// vuex 相关
import VuexHome from '@/components/vuex/VuexHome';
import BaseForm from '@/components/vuex/test_base/BaseForm';
import KeyKnown from '@/components/vuex/核心概念理解/state';

// 代码块
import BlockHome from '@/components/block/BlockHome';
import DataStream from '@/components/block/DataStream';

// es
import ESHome from '@/components/es/EsHome';
import Module from '@/components/es/es6/Module';

// 路由列表定义
const routerlist = [{
  path: '/',
  component: Home
}, 

// Router 相关 
{
  path: '/router',
  components: {
    default: Home,
    router: RouterHome,
  }, 
  name: 'router',
  children: [{
    path: 'navGuards',
    component: NavGuards,
    name: 'navguards',
  }, {
    path: 'getData',
    component: GetData,
    name: 'getData',
  }, {
    path: 'scroll',
    component: Scroll,
    name: 'scroll',
  }],
}, 

// vuex 相关
{
	path: '/vuex',
	name: 'vuex',
	components: {
		default: Home,
		vuex: VuexHome,
	},
	children: [{
		path: 'base_form',
		component: BaseForm,
		name: 'base_form',
	}, {
		path: 'key_known',
		component: KeyKnown,
		name: 'key_known',
	}]
},


//  iview template/render 模式
{
	path: '/iview',
	components: {
	  	default: Home,
		iview: IviewHome,
	},
	name: 'iview',
	children: [{
		path: 'template',
		component: TemplateRender,
		name: 'template',
	}, {
		component: ComponentParse,
		path: 'component_parse',
		name: 'component_parse',
	}]
}, 

// 小代码块:
{
	path: '/block',
	components: {
		default: Home,
		block: BlockHome,
	},
	name: 'block',
	children: [{
		path: 'data_stream',
		name: 'data_stream',
		component: DataStream,
	}],
},

// es 模块
{
	path: '/es',
	components: {
		default: Home,
		es: ESHome,
	},
	name: 'es',
	children: [{
		path: 'es6/module',
		name: 'es6/module',
		component: Module,
	}],
}];

// 菜单列表
const menulist = [{
	title: 'Home',
	link: '/',
	icon: 'ios-home',
}, {
	title: 'Vue-Router',
	sub: [{
		title: '导航守卫',
		link: '/router/navGuards',
	}, {
		title: '数据获取',
		link: '/router/getData',
	}, {
		title: '滚动行为',
		link: '/router/scroll',
	}],
}, {
	title: 'Vuex',
	sub: [{
		title: 'Form练习',
		link: '/vuex/base_form'
	}, {
		title: '核心概念理解',
		link: '/vuex/key_known'
	}]
}, {
	title: 'iview 示例',
	sub: [{
		title: '渲染方式',
		link: '/iview/template',
	}, {
		title: '组件内容详解',
		link: '/iview/component_parse',
	}]
}, {
	title: '实用代码块',
	sub: [{
		title: '数据流',
		link: '/block/data_stream',
	}]
}, {
	title: 'es模块',
	sub: [{
		title: 'ES6_module 模块',
		link: '/es/es6/module',
	}]
}];

export default {
	routerlist,
	menulist,
};
