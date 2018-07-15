<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <v-jumbotron>
          <h3 class="display-3">Baton Rouge Local Data</h3>
          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Enjoy the site.</div>
        </v-jumbotron>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations([ 'changeMainDrawer' ])
  },
  computed: {

  },
  created () {

  }
}
</script>
