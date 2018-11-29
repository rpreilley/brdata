import * as router from '@/router'
// import props from './props.js'

const routes = [{
  path: '/home',
  name: 'Home',
  component: () => import('./Home.vue'),
  meta: {
    // Can send meta props via route
    // props: props
  }
}]

router.registerRoutes(routes)
