<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    clipped
  >
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
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AppDrawer',
  data () {
    return {
      items: [
        { title: 'Home', icon: 'home', path: '/' },
        { title: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
        { title: 'Crime', icon: 'location_on', path: '/crime' }
      ],
      mini: true,
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
    drawer: {
      get () {
        return this.$store.state.general.mainDrawer
      },
      set (val) {
        return val
      }
    }
  }
}
</script>

<style>

</style>
