import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Home from '@/pages/Home'

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
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
