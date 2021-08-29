import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import FirstContainer from '@/first-container/FirstContainer'
import Dashboard from '@/pages/dashboard'
import Documentation from '@/pages/documentation'
import Morechart from '@/pages/morechart'
import Keychart from '@/pages/morechart/keychart/keychart'
import Linechart from '@/pages/morechart/linechart/linechart'
import Mixedchart from '@/pages/morechart/mixedchart/mixedchart'
import Authority from '@/pages/authority'
import Ruleauthority from '@/pages/authority/ruleauthority/ruleauthority'
import Editorauthority from '@/pages/authority/editorauthority/editorauthority'
import Visitorauthority from '@/pages/authority/visitorauthority/visitorauthority'
import Amap from '@/pages/amap'
import PathNavigator from '@/pages/amap/pathNavigator/pathNavigator'
import DrawBounds from '@/pages/amap/drawBounds/drawBounds'
import HeatMap from '@/pages/amap/heatMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      redirect: '/dashboard/index',
      name: 'FirstContainer',
      component: FirstContainer,
      children: [
        { path: '/dashboard/index', name: '首页', component: Dashboard },
        {
          path: '/documentation/index',
          name: '文章',
          component: Documentation
        },
        {
          path: '/authority/',
          name: '权限测试页',
          component: Authority,
          children: [
            {
              path: 'ruleauthority',
              name: '角色权限',
              component: Ruleauthority
            },
            {
              path: 'editorauthority',
              name: 'editor角色测试页',
              component: Editorauthority
            },
            {
              path: 'visitorauthority',
              name: 'visitor角色测试页',
              component: Visitorauthority
            }
          ]
        },
        {
          path: '/morechart/',
          name: '图表',
          component: Morechart,
          children: [
            {
              path: 'keychart',
              name: '键盘图标',
              component: Keychart
            },
            {
              path: 'linechart',
              name: '折线图标',
              component: Linechart
            },
            {
              path: 'mixedchart',
              name: '混合图标',
              component: Mixedchart
            }
          ]
        },
        {
          path: '/amap/',
          name: '高德地图',
          component: Amap,
          children: [
            {
              path: 'pathNavigator',
              name: '巡航器-飞单',
              component: PathNavigator
            },
            {
              path: 'drawBounds',
              name: '行政区标注',
              component: DrawBounds
            },
            {
              path: 'heatMap',
              name: '热力图',
              component: HeatMap
            }
          ]
        }
      ]
    }
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/dashboard',
    //   name: 'Dashboard',
    //   component: Dashboard
    // }
  ]
})
