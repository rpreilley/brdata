<template>
  <div>
    <v-jumbotron>
      <v-container fill-height>
        <v-layout row>
          <v-flex>
            <h3 class="display-3">Baton Rouge Local Data</h3>
            <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3">Enjoy the site.</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>

<script>
import methods from './methods.js'
import computed from './computed.js'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods: methods,
  computed: computed,
  created () {

  }
}
</script>
