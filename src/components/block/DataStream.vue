<!--
* @Author: Zhang Guohua
* @Date:   2019-01-16 16:52:38
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-16 17:52:11
* @Description: create by zgh
* @GitHub: Savour Humor
-->
<!--
  @Author zgh
  @Description 数据流基础组件
-->
<template>
  <div>
    <div :class="theme" class="stream-wrapper">
      <el-table
        :data="table.data"
        stripe
        show-summary
        sum-text="统计"
        :summary-method="getSummaries"
        height="100%"
        style="width: 100%; max-height: 100%">
        <el-table-column
          v-for="item in layout"
          :prop="item.key"
          :key="item.key"
          :label="item.value"
        ></el-table-column>
      </el-table>
    </div>
    <!-- 测试按钮 -->
    <div>
      <el-row>
        <el-button type="primary" @click="addOne">增加一条</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
// 数据流组件: 开发过程中增加的组件，作为数据流展示的基础组件
// 内容：
//    展示数据流
//
import 'element-ui/lib/theme-chalk/base.css';


// 测试数据
const baseData = '《为你我受冷风吹》,为你我受冷风吹 寂寞时候流眼泪,有人问我是与非 说是与非,可是谁又真的关心谁,若是爱已不可为,明白说吧 无所谓,不必给我安慰 何必怕我伤悲,就当我从此收起真情 谁也不给,我会试着放下往事,管他过去有多美,也会试着不去想起,你如何用爱将我包围,那深情的滋味,但愿我会就此放下往事,忘了过去有多美,不盼缘尽仍留慈悲,虽然我曾经这样以为,我真的这样以为';
const data = baseData.split(',');

export default {
  props: {
    theme: {
      default: 'log',
    },
    maxLength: {
      default: 50,
    },
    layout: {
      default: function(){
        return [{
          key: 'date',
          value: '日期',
          width: '40',
        }, {
          key: 'level',
          value: '级别',
          width: '10',
        }, {
          key: 'main',
          value: '主要内容',
          width: '50',
        }, {
          key: 'info',
          value: '详细信息',
          width: '100',
        }];
      },
      type: Array,
    },
    info: {
      default: {
        contentSpan: '日志',
      },
    },
  },
  name: 'DataStream',
  data() {
    return {
      table: {
        data: [],
      },
    };
  },
  methods: {
    // 增加一条信息
    addOne(){
      const vm = this;
      let index = vm.table.data.length;
      if(index === data.length) return;
      vm.table.data.unshift({
        date: new Date().toLocaleString(),
        level: ['Info', 'Warn', 'Error'][Math.floor(Math.random()*3)],
        main: '我是提要',
        info: data[index],
      });
    },
    getSummaries(param) {
      return ['统计: ', `目前共有 ${param.data.length} 条${this.info.contentSpan}信息`];
    },
  },
};
</script>

<style lang="scss" scoped>
.stream-wrapper {
  margin: 10px 1%;
  padding: 2px;
  width: 98%;
  height: 300px;
  border: 1px solid #000000;
}
.log {
  background: #dbf4fc;
  color: #000;
}
.date {
  
}
</style>
