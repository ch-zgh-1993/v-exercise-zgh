<!--
* @Author: Zhang Guohua
* @Date:   2018-11-12 19:40:19
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-02 16:49:30
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>

  <div id="app">
    <div class="layout">
        <Layout style="width: 100vw; height: 100vh;">
            <HeaderZ></HeaderZ>
            <Layout>
              <Sider hide-trigger :style="{background: '#fff'}">
                <Menu active-name="0" theme="light" width="auto" :open-names="['0']"
                
                >
                  <MenuItem name="0" to="/">
                    <Icon type="ios-home"></Icon>
                      Home
                  </MenuItem>
                  <Submenu name="1">
                      <template slot="title">
                          <Icon type="ios-jet"></Icon>
                          Vue-Router
                      </template>
                      <MenuItem name="1-1" to="/router/navGuards">
                        <Icon type="ios-git-merge"></Icon>
                        导航守卫
                      </MenuItem>
                      <MenuItem name="1-2" to="/GetData">
                        <Icon type="ios-git-merge"></Icon>
                        数据获取
                      </MenuItem>
                      <MenuItem name="1-3" to="/Scroll">
                        <Icon type="ios-git-merge"></Icon>
                        滚动行为
                      </MenuItem>
                  </Submenu>
                  <MenuItem name="2" to="/iview/tr">
                    <Icon type="ios-git-merge"></Icon>
                      iview 示例
                  </MenuItem>
                </Menu>
              </Sider>
              <Layout :style="{padding: '0 24px 24px'}">
                  <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                      <router-view class="index-content-default"/>
                      <router-view class="index-content-title" :name="level1 || '未命名1'" />
                      <router-view class="index-content-content" :name="level2 || '未命名2'" />
                  </Content>
              </Layout>
            </Layout>
        </Layout>
    </div>
  </div>
</template>

<script>
// 菜单目录，建议是动态生成的，这样有利于维护，修改，和根据权限做处理。这里的方法不建议使用。
// 

import HeaderZ from '@/components/common/HeaderZ'

export default {
  name: 'App',
  data () {
    return {
      level1: '',
      level2: '',
    }
  },
  components: {
    HeaderZ,
  },
  watch: {
    '$route' (to, from) {
      console.log(to.matched.length)
      switch(to.matched.length){
        case 1:
        console.log(111)
          this.level1 = to.matched[0].name;
          break;
        case 2:
        console.log(222)
          this.level1 = to.matched[0].name;
          this.level2 = to.matched[1].name;
          break;
      }
    } 
  },
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
  color: #2c3e50;
}

.nav {
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  background: #69b98d;
}

.index-content-default {
  margin: 20px;
  color: green;
}

.index-content {
  margin: 20px;
}
</style>
