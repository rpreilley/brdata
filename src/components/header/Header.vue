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
        <v-menu offset-y open-on-hover>
          <v-btn slot="activator" flat><v-icon class="icon-with-text">pages</v-icon>Pages</v-btn>
          <v-list>
            <v-list-tile
              v-for="page in pages"
              :key="page.title"
              @click="menuSubmit(page)"
            >
              <v-list-tile-action><v-icon>{{ page.icon }}</v-icon></v-list-tile-action>
              <v-list-tile-title v-text="page.title"></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-menu offset-y open-on-hover>
          <v-btn slot="activator" flat><v-icon class="icon-with-text">account_circle</v-icon>Account</v-btn>
          <v-list>
            <v-list-tile
              v-for="menuItem in menuItems"
              :key="menuItem.title"
              @click="menuSubmit(menuItem)"
            >
              <v-list-tile-action><v-icon>{{ menuItem.icon }}</v-icon></v-list-tile-action>
              <v-list-tile-title v-text="menuItem.title"></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
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
      pages: [
        { title: 'Home', icon: 'home', path: '/' },
        { title: 'Crime', icon: 'location_on', path: '/crime' },
        { title: 'Dashboard', icon: 'dashboard', path: '/dashboard' }
      ],
      menuItems: [
        { title: 'Settings', icon: 'settings', path: '/settings' }
      ],
      items: [
        { title: 'Home', icon: 'home', path: '/' },
        { title: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
        { title: 'Crime', icon: 'location_on', path: '/crime' }
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
