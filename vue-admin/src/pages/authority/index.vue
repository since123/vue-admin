<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Ruleauthority from '@/pages/authority/ruleauthority/ruleauthority'
import Editorauthority from '@/pages/authority/editorauthority/editorauthority'
import Visitorauthority from '@/pages/authority/visitorauthority/visitorauthority'
import tracker from '@/mixins/tracker'

export default {
  isPage: true,
  mixins: [tracker],
  components: {
    Ruleauthority,
    Editorauthority,
    Visitorauthority
  }
}
</script>

<style></style>
