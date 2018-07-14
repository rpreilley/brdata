import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Crime from '@/pages/crime/Crime.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/crime',
      name: 'Crime',
      component: Crime
    }
  ]
})
