<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Keychart from '@/pages/morechart/keychart/keychart'
import Linechart from '@/pages/morechart/linechart/linechart'
import Mixedchart from '@/pages/morechart/mixedchart/mixedchart'
export default {
  components: {
    Keychart,
    Linechart,
    Mixedchart
  }
}
</script>

<style>
</style>
