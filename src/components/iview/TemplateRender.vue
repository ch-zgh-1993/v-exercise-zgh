<!--
* @Author: Zhang Guohua
* @Date:   2018-11-22 11:36:05
* @Last Modified by:   zgh
* @Last Modified time: 2018-11-22 14:36:58
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
	<Row>
        <Col span="8">
            <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="8">
            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="8">
        	<Switch size="large">
		        <span slot="open">ON</span>
		        <span slot="close">OFF</span>
		    </Switch>
        </Col>
    </Row>
</template>

<script type="text/javascript">
	// template/render
	// 
	// 除了 switch, circle 必须引入 i- 前缀外，其余都不用。


	// 示例使用 DatePicker
	// 
	export default {
		name: 'TemplateRender'
	}

</script>