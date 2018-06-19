<template>
  <v-toolbar dense>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu offset-y open-on-hover>
        <v-btn slot="activator" flat><v-icon class="icon-with-text">account_circle</v-icon>{{ fullName }}</v-btn>
        <v-list>
          <v-list-tile @click="settingsForm()">
            <v-list-tile-action><v-icon>settings</v-icon></v-list-tile-action>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout()">
            <v-list-tile-action><v-icon>arrow_forward</v-icon></v-list-tile-action>
            <v-list-tile-title>Log Out</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import router from '@/router/'
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      router: router
    }
  },
  methods: {
    handleSelection: function () {

    },
    logout () {
      // Clear user store
      this.$store.dispatch('clearUserStore')
      // Route back to home component
      this.$router.push({
        name: 'Landing'
      })
    },
    settingsForm () {

    }
  },
  computed: {
    ...mapGetters([
      'settingsFormState'
    ]),
    fullName () {
      let firstName = this.$store.state.user.firstName
      let lastName = this.$store.state.user.lastName
      return `${firstName} ${lastName}`
    }
  }
}
</script>

<style>

</style>
