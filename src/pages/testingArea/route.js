import * as router from '@/router'
// import props from './props.js'

const routes = [{
  path: '/testingarea',
  name: 'Testing Area',
  component: () => import('./testingArea.vue'),
  meta: {
    // Can send meta props via route
    // props: props
  }
}]

router.registerRoutes(routes)
