<!--
* @Author: Zhang Guohua
* @Date:   2018-12-02 14:31:22
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-02 15:03:41
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<Sider hide-trigger :style="{background: '#fff'}">
        <Menu active-name="0" theme="light" width="auto" :open-names="['0']">
        	<MenuItem name="0">
        		<Icon type="ios-home"></Icon>
        		<router-link to="/navGuards">
        			Home
        		</router-link>
        	</MenuItem>
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-jet"></Icon>
                    Vue-Router
                </template>
                <MenuItem name="1-1">Option 1</MenuItem>
            </Submenu>
            <MenuItem name="2">
        		<Icon type="ios-git-merge"></Icon>
        		<router-link to="/iview/tr">
        			iview 示例
        		</router-link>
        	</MenuItem>
        </Menu>
    </Sider>
</template>

<script>
	// 在 APP.vue 中导入 sieder 时，会出现样式不对问题。之后在细究。
	// 此时在于完成Router的导航。
	export default {
		name: 'SiderZ'
	}
</script>
