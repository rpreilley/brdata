import * as router from '@/router'
// import props from './props.js'

const routes = [{
  path: '/nasa',
  name: 'Nasa',
  component: () => import('./Nasa.vue'),
  meta: {
    // Can send meta props via route
    // props: props
  }
}]

router.registerRoutes(routes)
