import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Crime from '@/pages/crime/Crime.vue'
import Movies from '@/pages/movies/Movies.vue'
import Nasa from '@/pages/nasa/Nasa.vue'
import HarryPotter from '@/pages/harrypotter/HarryPotter.vue'
import TestingArea from '@/pages/testingArea/testingArea.vue'

Vue.use(Router)

let brRouter = new Router({
  mode: 'hash',
  routes: [
    // Can put routes here or use method below to maintain a route.js file with a page
  ]
})

export function registerRoutes (routes) {
  brRouter.addRoutes(routes)
}

export default brRouter

// Load every route file within the pages directory and require it
function importRoutes (r) {
  r.keys().forEach(r)
}

importRoutes(require.context('@/pages/', true, /route.js$/))
