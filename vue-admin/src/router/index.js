import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import FirstContainer from '@/first-container/FirstContainer'
import Dashboard from '@/pages/dashboard/index'
import Documentation from '@/pages/documentation/index'
import Morechart from '@/pages/morechart/index'
import Keychart from '@/pages/morechart/keychart/Keychart'
import Linechart from '@/pages/morechart/linechart/Linechart'
import Mixedchart from '@/pages/morechart/mixedchart/Mixedchart'

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
      path: '/',
      redirect: '/dashboard',
      name: 'FirstContainer',
      component: FirstContainer,
      children: [
        { path: '/dashboard', name: '首页', component: Dashboard },
        { path: '/documentation', name: '文章', component: Documentation },
        { path: '/morechart',
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
