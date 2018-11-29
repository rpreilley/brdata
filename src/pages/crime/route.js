import * as router from '@/router'
// import props from './props.js'

const routes = [{
  path: '/crime',
  name: 'Crime',
  component: () => import('./Crime.vue'),
  meta: {
    // Can send meta props via route
    // props: props
  }
}]

router.registerRoutes(routes)
