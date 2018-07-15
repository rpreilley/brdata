import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Crime from '@/pages/crime/Crime.vue'
import Settings from '@/pages/settings/Settings.vue'

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
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
