export default {
  mounted() {
    console.log('挂载')
    this.track()
    document.addEventListener('visibilitychange', this.track)
  },
  beforeDestroy() {
    console.log('即将销毁')
    document.removeEventListener('visibilitychange', this.track)
  },
  methods: {
    track() {
      // 页面级别组件
      if (document.visibilityState === 'visible') {
        console.log('track me!', new Date())
      }
    }
  }
}
