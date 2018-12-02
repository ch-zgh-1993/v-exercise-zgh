<!--
* @Author: Zhang Guohua
* @Date:   2018-11-12 19:40:19
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-02 17:10:07
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
                      <MenuItem name="1-2" to="/router/getData">
                        <Icon type="ios-git-merge"></Icon>
                        数据获取
                      </MenuItem>
                      <MenuItem name="1-3" to="/router/scroll">
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
      level1: ''
    }
  },
  components: {
    HeaderZ,
  },
  watch: {
    '$route' (to, from) {
      if(to.matched.length > 0){
        this.level1 = to.matched[0].name;
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
.index-content-title {
  margin: 20px;
  color: orange;
}

.index-content {
  margin: 20px;
}
</style>
