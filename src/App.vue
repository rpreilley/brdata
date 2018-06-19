<template>
  <v-app id="app" dark>

    <!-- NAV DRAWER COMPONENT-->

    <!-- TOOLBAR COMPONENT -->
    <app-header v-show="loggedIn"></app-header>

    <!-- ROUTER VIEW COMPONENT -->
    <v-content>
      <v-container fluid>
        <router-view :loggedIn="loggedIn"></router-view>
      </v-container>
    </v-content>

    <!-- FOOTER COMPONENT -->
    <app-footer v-show="loggedIn"></app-footer>

  </v-app>
</template>

<script>
import Vue from 'vue'
import ApiService from '@/services/ApiService.js'

Vue.component('AppHeader', () => import('@/components/header/Header.vue'))
Vue.component('AppFooter', () => import('@/components/footer/Footer.vue'))

export default {
  name: 'App',
  components: {
    AppHeader: () => import('@/components/header/Header.vue'),
    AppFooter: () => import('@/components/footer/Footer.vue')
  },
  data: () => {
    return {
      message: {}
    }
  },
  methods: {
    async testing () {
      try {
        let response = await ApiService.get('http://localhost:3000/login')
        console.log('RESPONSE', response)
        this.msg = response.data
      } catch (e) {
        console.log(e, 'Error Caught')
      }
    }
  },
  created () {
    // this.testing()
  },
  computed: {
    loggedIn () {
      return (this.$store.state.user) ? this.$store.state.user.loggedIn : false
    }
  }
}
</script>

<style>

</style>
