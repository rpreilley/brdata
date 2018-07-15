<template>
  <div>
    <v-toolbar dense>
      <v-toolbar-title>Baton Rouge Local Data</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn slot="activator" flat v-show="music"><v-icon>pause</v-icon></v-btn>
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
      pages: [
        { title: 'Home', icon: 'home', path: '/' },
        { title: 'Crime', icon: 'location_on', path: '/crime' },
        { title: 'Dashboard', icon: 'dashboard', path: '/dashboard' }
      ],
      menuItems: [
        { title: 'Settings', icon: 'settings', path: '/settings' }
      ]
    }
  },
  methods: {
    ...mapMutations([ 'changeMainDrawer' ]),
    menuSubmit (item) {
      this.$router.push(item.path)
    }
  },
  computed: {
    ...mapGetters([ 'music' ])
  }
}
</script>

<style>

</style>
