// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import App from './App'
import router from './router'
import store from './store'
import AMap from 'vue-amap'
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: 'db65afe419d6c18850d77b536436e5b0', // 刚刚开发者申请哪里的key
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']
})
Vue.use(ElementUI)
Vue.use(echarts)
Vue.prototype.$echarts = echarts
Vue.prototype.$store = store
Vue.config.productionTip = false

// const router = new Router()

// 目的：页面可见时，发送埋点

// router.afterEach((to, from, next) => {
//   const nextPagePath = to.fullPath

//   const listener = () => {
//     if (document.visibilityState === 'visible') {
//       // 当前页面可见
//       const href = document.location.href
//       if (href.indexOf(nextPagePath) > -1) {
//         // 当前页面的 URL 是要去的页面
//         console.log('nextPagePath', nextPagePath)
//         // document.removeEventListener('visibilitychange', listener)
//         // window.localStorage.setItem('nextPagePath', nextPagePath)
//         // return true
//       }
//     }
//   }

//   // 微任务等到 dom 更新
//   Promise.resolve().then(() => {
//     listener()
//     document.addEventListener('visibilitychange', listener)
//   })
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
