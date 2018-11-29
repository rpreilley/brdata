import * as router from '@/router'
// import props from './props.js'

const routes = [{
  path: '/harrypotter',
  name: 'Harry Potter',
  component: () => import('./HarryPotter.vue'),
  meta: {
    // Can send meta props via route
    // props: props
  }
}]

router.registerRoutes(routes)
