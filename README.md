/*
* @Author: Zhang Guohua
* @Date:   2018-11-12 19:40:19
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-03 16:36:07
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# v-exercise-zgh
vue program level exercise.

## 项目声明
1. 这里仅是例子，很多东西只是为了研究，或者做个说明性的内容。
2. 代码规范有时候可能并不在意，但在项目中会明确做法。
3. 具体功能，需要具体分析，这里的实现方式一切为了练习，说明，整理，对比内容。不深究方式。
4. 样式就更不是此项目需要考虑，分析和讨论的。很多时候我们只需要最简单，最粗糙，的方式说明我们遇到的问题，模拟遇到的场景，说明我们想要研究的，学习的内容即可。

## default
> vue program exercise。主要是一些常用插件：如 vue-router, vuex, vue-loader, webpack 在其中的使用. 
> 
## vue-router 相关
1. 导航守卫及使用

### router 常见问题
1. 基础部分
    1. 命名视图.
        1. 在 children 中，一定不要加 <del>/email</del>, 会被作为根路径。
        2. 视图也是嵌套的，即组件中也可以有视图，在路由中通过嵌套路由体现。即，不是所有的路由，都在根 vue 组件上。你可以通过不断嵌套实现复杂布局。之前错误的以为，路由嵌套，但视图都要在 vue 根实例上渲染，这样就没什么意义了。

## vuex 相关内容
### vuex 基础内容相关练习 (test_base)
1. 表单处理练习: 
    1. vuex 时， v-model 的两种使用方式。

## vue + iview (具体一些问题，可以见其他项目总结，或者iview框架总结)
1. 使用 template/render 进行渲染。
2. 使用 iview-loader 
3. 使用 主题定制
    1.  使用主题定制时，引入less后，不需要在 webpack.base.config 中进行配置，因为在 vue 已经在 utils 中配置过了。如果再次配置，运行将会出现错误。这配置在网上的博客中经常出现，但还是不幸的是，这是错误的方法。 会提示，不是一个模块。

