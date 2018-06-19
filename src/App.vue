<template>
  <v-app id="app" dark>

    <!-- NAV DRAWER COMPONENT-->

    <!-- TOOLBAR COMPONENT -->
    <app-header></app-header>

    <!-- ROUTER VIEW COMPONENT -->
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <!-- FOOTER COMPONENT -->
    <app-footer></app-footer>

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

    }
  },
  methods: {

  },
  created () {

  },
  computed: {

  }
}
</script>

<style>

</style>
