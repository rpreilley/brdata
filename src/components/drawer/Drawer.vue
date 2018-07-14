<template>
<v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
  >
    <v-list class="pa-1">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>John Leider</v-list-tile-title>
        </v-list-tile-content>
        <v-btn flat icon @click="changeMainDrawer">
          <v-icon>close</v-icon>
        </v-btn>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
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
        { title: 'Home', icon: 'dashboard', path: '/' },
        { title: 'About', icon: 'question_answer', path: '/about' }
      ],
      links: ['Home', 'Contacts', 'Settings'],
      mini: true,
      right: null
    }
  },
  methods: {
    ...mapMutations([ 'changeMainDrawer' ])
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
