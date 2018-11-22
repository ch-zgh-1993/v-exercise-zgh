<!--
* @Author: Zhang Guohua
* @Date:   2018-11-12 19:40:19
* @Last Modified by:   zgh
* @Last Modified time: 2018-11-22 18:55:05
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>

  <div id="app">
    <div class="nav">
      <router-link to="/navGuards">导航守卫</router-link>
      <router-link to="/GetData">数据获取</router-link>
      <router-link to="/Scroll">滚动行为</router-link>
      <router-link to="/iview/tr">iview 示例</router-link>
    </div>
    <router-view class="index-content-name"/>
    <router-view class="index-content" :name="name" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      name: ''
    }
  },
  watch: {
    '$route' (to, from) {
      if(to.name){
        console.log(to.name);
        this.name = to.name;
      }
    } 
  }
}
</script>

<!-- 导入less -->
<!-- <style lang="less">
  // 导入 less 文件
   @import 'zgh-theme/index.less';

  // 直接导入
   //@import '~iview/src/styles/index.less';
  // 默认颜色
  //@primary-color: #078c88;
</style> -->

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  background: #69b98d;
}

.index-content-name {
  margin: 20px;
  color: green;
}

.index-content {
  margin: 20px;
}
</style>
