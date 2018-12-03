<!--
* @Author: Zhang Guohua
* @Date:   2018-11-12 19:40:19
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-03 16:18:26
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
                <Menu :active-name="0" theme="light" width="auto" :open-names="['0']"
                
                >
                  <template v-for="(item, i) in menuList">
                    <template v-if="typeof item.sub !== 'undefined'">
                      <Submenu :name="i + ''">
                        <template slot="title">
                          <Icon :type="item.icon || 'ios-git-merge'"></Icon>
                          {{ item.title }}
                        </template>
                          <template v-for="(key, j) in item.sub">
                            <MenuItem :name="i + '-' + j" :to="key.link">
                              <Icon :type="key.icon || 'ios-git-merge'"></Icon>
                              {{ key.title }}
                            </MenuItem>
                          </template>
                      </Submenu>
                    </template>
                    <template v-else>
                      <MenuItem :name="i" :to="item.link">
                        <Icon :type="item.icon || 'ios-git-merge'"></Icon>
                          {{ item.title }}
                      </MenuItem>
                    </template>
                  </template>
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

import HeaderZ from '@/components/common/HeaderZ';
import List from '@/assets/js/list';

export default {
  name: 'App',
  data () {
    return {
      level1: '',
      menuList: List.menulist
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
