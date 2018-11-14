<!--
* @Author: Zhang Guohua
* @Date:   2018-11-12 19:40:19
* @Last Modified by:   zgh
* @Last Modified time: 2018-11-14 19:29:14
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
  <div id="app">
    <div>
      <router-link to="/navGuards">导航守卫</router-link>
      <router-link to="/GetData">数据获取</router-link>
      <router-link to="/Scroll">滚动行为</router-link>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.index-content-name: {
  margin: 20px;
  color: green;
}
.index-content {
  margin: 20px;
}
</style>
