<template>
  <div>
    <v-navigation-drawer :clipped="clipped" v-model="drawer" enable-resize-watcher app>
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Main Menu</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="menuSubmit(item)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
      <v-toolbar dense fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Vue App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="formTesting">Form Testing</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Header',
  inject: ['brHome_takeAction'],
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'book', path: '/' },
        { title: 'Crime Watch', icon: 'gavel', path: '/crime' },
        { title: 'NASA Pod', icon: 'star', path: '/nasa' },
        { title: 'Movie Posters', icon: 'movie', path: '/movies' },
        { title: 'Dashboard', icon: 'dashboard', path: '/dashboard' }
      ],
      mini: true,
      clipped: false,
      right: null
    }
  },
  methods: {
    ...mapMutations([ 'changeMainDrawer' ]),
    formTesting (items) {
      this.brHome_takeAction(items)
    },
    menuSubmit (item) {
      this.$router.push(item.path)
    }
  },
  computed: {
    ...mapGetters([ 'appTheme' ])
  }
}
</script>

<style>

</style>
