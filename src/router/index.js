import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Crime from '@/pages/crime/Crime.vue'
import Movies from '@/pages/movies/Movies.vue'
import Nasa from '@/pages/nasa/Nasa.vue'
import HarryPotter from '@/pages/harrypotter/HarryPotter.vue'

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
    },
    {
      path: '/harrypotter',
      name: 'Harry Potter',
      component: HarryPotter
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Home
    }
  ]
})
