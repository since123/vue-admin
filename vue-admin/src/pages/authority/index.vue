<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Ruleauthority from '@/pages/authority/ruleauthority/ruleauthority'
import Editorauthority from '@/pages/authority/editorauthority/editorauthority'
import Visitorauthority from '@/pages/authority/visitorauthority/visitorauthority'
export default {
  components: {
    Ruleauthority,
    Editorauthority,
    Visitorauthority
  }
}
</script>

<style>
</style>
