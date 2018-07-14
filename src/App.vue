<template>
  <v-app id="app" dark>

    <!-- NAV DRAWER COMPONENT-->
    <app-drawer></app-drawer>

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
import AppDrawer from '@/components/drawer/Drawer.vue'

Vue.component('app-header', () => import('@/components/header/Header.vue'))
Vue.component('app-footer', () => import('@/components/footer/Footer.vue'))

export default {
  name: 'App',
  components: {
    AppHeader: () => import('@/components/header/Header.vue'),
    AppFooter: () => import('@/components/footer/Footer.vue'),
    AppDrawer
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
