### mixin混入页面方法，且只在切换到当前窗口时执行，离开时销毁
track.js
```js
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
  ```

在其他页面执行时：
text.vue
```js
import tracker from '@/mixins/tracker'

export default {
    mixins: [tracker],
}
```