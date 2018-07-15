<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs10 offset-xs1>
        <v-card>
          <v-list>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Settings</v-list-tile-title>
                <v-list-tile-sub-title>Toggle settings below.</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-switch></v-switch>
              </v-list-tile-action>
              <v-list-tile-title>Something</v-list-tile-title>
            </v-list-tile>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn large color="primary" class="mx-0" @click.stop="$router.go(-1)">Back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Settings',
  data () {
    return {
      appTheme: false,
      music: false
    }
  },
  methods: {
    ...mapMutations([ 'changeAppTheme' ])
  },
  computed: {

  },
  created () {

  },
  mounted () {

  }
}
</script>
