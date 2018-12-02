<!--
* @Author: Zhang Guohua
* @Date:   2018-12-02 14:17:56
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-02 14:26:42
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">Savour Humor</div>
            <!-- <div class="layout-nav">
                <MenuItem name="1">
                    <Icon type="ios-navigate"></Icon>
                    Item 1
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-analytics"></Icon>
                    Item 3
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-paper"></Icon>
                    Item 4
                </MenuItem>
            </div> -->
        </Menu>
    </Header>
</template>

<script>
	export default {
		name: 'HeaderZ'
	}
</script>

<style>
	.layout-logo {
		text-align: right;
		color: #fff;
	}
</style>