import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const brRouter = new Router({
  mode: 'hash',
  routes: [
    // Can put routes here or use method below to maintain a route.js file with a page
  ]
})

brRouter.beforeEach((to, from, next) => {
  // if route does not have a name, send back to home
  if (!to.name) {
    brRouter.push('/')
    // Work in an alert to snackbar for what happened
  }
  next()
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
