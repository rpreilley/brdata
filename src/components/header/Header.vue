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
      <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Baton Rouge Local Data</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">

      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      drawer: false,
      items: [
        { title: 'About', icon: 'book', path: '/about' },
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
