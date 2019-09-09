import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import FirstContainer from '@/first-container/FirstContainer'
import Home from '@/pages/Home'
import Dashboard from '@/pages/dashboard/index'
import Documentation from '@/pages/documentation/index'
import { Container } from 'element-ui'

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
        { path: 'dashboard', name: '首页', component: Dashboard },
        { path: 'documentation', name: '文章', component: Documentation }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
