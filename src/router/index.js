import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Landing from '@/components/landing/Landing.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
