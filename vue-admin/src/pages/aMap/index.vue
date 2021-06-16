<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import PathNavigator from '@/pages/amap/pathNavigator/pathNavigator'
import DrawBounds from '@/pages/amap/drawBounds/drawBounds'

export default {
  components: {
    PathNavigator,
    DrawBounds
  }
}
</script>

<style></style>
