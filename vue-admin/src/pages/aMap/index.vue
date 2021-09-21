<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import PathNavigator from '@/pages/amap/pathNavigator/pathNavigator'
import DrawBounds from '@/pages/amap/drawBounds/drawBounds'
import HeatMap from '@/pages/amap/heatMap/index'
import Heatmap3d from '@/pages/amap/heatmap3d/index'

export default {
  components: {
    PathNavigator,
    DrawBounds,
    HeatMap,
    Heatmap3d
  }
}
</script>

<style></style>
