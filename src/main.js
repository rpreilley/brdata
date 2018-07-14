// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import AsyncComputed from 'vue-async-computed'

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

// App's theme file
import { mainTheme } from '@/styles/mainTheme.js'

Vue.use(Vuetify, {
  theme: mainTheme
})

Vue.use(AsyncComputed)

Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  store,
  router,
  ...App,
  components: { App: () => import('@/App.vue') }
})

export { app, router, store }
