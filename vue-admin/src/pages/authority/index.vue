<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Pageauthority from '@/pages/authority/pageauthority/pageauthority'
import Orderauthority from '@/pages/authority/orderauthority/orderauthority'
import Ruleauthority from '@/pages/authority/ruleauthority/ruleauthority'
export default {
  components: {
    Pageauthority,
    Orderauthority,
    Ruleauthority
  }
}
</script>

<style>
</style>
