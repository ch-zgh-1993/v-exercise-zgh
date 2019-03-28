<!--
* @Author: Zhang Guohua
* @Date:   2019-01-31 10:50:13
* @Last Modified by:   zgh
* @Last Modified time: 2019-02-28 17:16:08
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<template>
  <el-col :span="span || 6" class="item-wrapper">
    <div class="label"  :style="{background: color || 'transparent'}">{{ label }}:</div>
    <div class="value"  :style="{background: color || 'transparent'}">{{ value }}</div>
  </el-col>
</template>

<script>
// 一个信息的展示组件，可以用在详情页面。可以用在任务结果中,显示任务的类型,数量。
// 便于统一样式的展示和管理。

export default {
  props: ['label', 'value', 'color', 'span'],
  name: 'BaseDetailCol',
};

</script>

<style lang="scss" scoped>
.label, .value {
  display: table-cell;
}
.label {
  word-break: keep-all;
}
.value {
  word-break: break-all;
  padding-left: 8px;
}
.item-wrapper {
  display: flex;
  margin-bottom: 20px;
}
</style>