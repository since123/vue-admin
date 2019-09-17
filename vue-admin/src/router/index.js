import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import FirstContainer from '@/first-container/FirstContainer'
import Dashboard from '@/pages/dashboard'
import Documentation from '@/pages/documentation'
import Morechart from '@/pages/morechart'
import Keychart from '@/pages/morechart/keychart/Keychart'
import Linechart from '@/pages/morechart/linechart/Linechart'
import Mixedchart from '@/pages/morechart/mixedchart/Mixedchart'
import Authority from '@/pages/authority'
import Pageauthority from '@/pages/authority/pageauthority/pageauthority'
import Orderauthority from '@/pages/authority/orderauthority/orderauthority'
import Ruleauthority from '@/pages/authority/ruleauthority/ruleauthority'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/first-container',
      // redirect: '/first-container',
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
          path: '/authority',
          name: '权限测试页',
          component: Authority,
          children: [
            {
              path: '/pageauthority',
              name: '页面权限',
              component: Pageauthority
            },
            {
              path: '/orderauthority',
              name: '指令权限权限',
              component: Orderauthority
            },
            {
              path: '/ruleauthority',
              name: '角色权限',
              component: Ruleauthority
            }
          ]
        },
        {
          path: '/morechart',
          name: '图表',
          component: Morechart,
          children: [
            {
              path: '/keychart',
              name: '键盘图标',
              component: Keychart
            },
            {
              path: '/linechart',
              name: '折线图标',
              component: Linechart
            },
            {
              path: '/mixedchart',
              name: '混合图标',
              component: Mixedchart
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
