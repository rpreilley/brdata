import * as router from '@/router'
// import props from './props.js'

const routes = [{
  path: '/movies',
  name: 'Movies',
  component: () => import('./Movies.vue'),
  meta: {
    // Can send meta props via route
    // props: props
  }
}]

router.registerRoutes(routes)
