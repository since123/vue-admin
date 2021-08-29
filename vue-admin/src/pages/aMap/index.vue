<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import PathNavigator from '@/pages/amap/pathNavigator/pathNavigator'
import DrawBounds from '@/pages/amap/drawBounds/drawBounds'
import HeatMap from '@/pages/amap/heatMap/index'

export default {
  components: {
    PathNavigator,
    DrawBounds,
    HeatMap
  }
}
</script>

<style></style>
