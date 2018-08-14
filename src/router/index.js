import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Crime from '@/pages/crime/Crime.vue'
import Movies from '@/pages/movies/Movies.vue'
import Nasa from '@/pages/nasa/Nasa.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: Home
    // },
    {
      path: '/nasa',
      name: 'Nasa',
      component: Nasa
    },
    {
      path: '/crime',
      name: 'Crime',
      component: Crime
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    }
  ]
})
