<template>
  <div ref="chart" class="chart"></div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },

  mounted () {
    let chart = this.$echarts.init(this.$refs['chart'])
    chart.setOption(this.config)
    window.addEventListener('resize', () => {
      chart.resize()
    })
  }
}
</script>

<style scoped>
.chart {
  width: 100%;
  height: 350px;
  background: #fff;
  border-radius: 5px;
}
</style>
