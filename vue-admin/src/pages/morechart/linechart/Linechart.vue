<template>
  <el-main>
    <div>
      <span>时间轴</span>
      <Chart :config="lineChartConfig"></Chart>
    </div>
  </el-main>
</template>
<script>
import Chart from '../../dashboard/components/Chart'
import { lineOptionTime } from '../lineOptionTime.js'
export default {
  data() {
    return {
      lineChartConfig: {}
    }
  },
  components: {
    Chart
  },
  created() {
    this.lineChartConfig = lineOptionTime()
  }
}
</script>
<style scoped>
.el-main {
  padding: 0;
}
</style>
