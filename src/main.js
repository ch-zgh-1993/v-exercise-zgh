/*
* @Author: Zhang Guohua
* @Date:   2018-11-12 19:40:19
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-16 17:10:15
* @Description: create by zgh
* @GitHub: Savour Humor
*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入 vuex
import store from './store/index';

//  引入 iview
import iView from 'iview'

// 引入默认样式
// import 'iview/dist/styles/iview.css'
// 引入重写的主题
// 要分析问题， 问题是包没导进来，还是导入错误
// 还是没有构建成模块
// 现在的问题就是 webpack 没有把 less 文件构建成模块。
// 
// 
// 误区！误区！误区！
// 增加 less loader
// 下面 loader 必须这么写，不然会报错。
// 安装如果提示找不到模块，则检查是否装 less loader, 检查是否正确安装，可卸载重装。
//	
//	已经在 utils 中配置过了 less解析
//	只需要 导入 less 和 less-loader 的包即可。
//	
//	网上大部分是误导人的，
//	最后分析来分析去，只能是 webpack 没有将 t 当成一个模块。
//	规则删掉，ok。
import './zgh-theme/index.less'
// // 国际化
// import locale from 'iview/dist/locale/en-US';
// Vue.use(iView, { locale });
// iview 全局配置
Vue.use(iView);

// 引入 element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

// 初始化 App
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
