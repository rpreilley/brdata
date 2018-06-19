<template>
  <div>
    <v-jumbotron>
      <v-container fill-height>
        <v-layout align-center row>
          <v-flex>
            <h3 class="display-3">Welcome to the Home Page</h3>
            <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3">Whatever text here</div>
            <v-btn large color="primary" class="mx-0" @click.stop="$router.go(-1)">Back</v-btn>
            <v-btn large color="primary" class="mx-0" @click.stop="">Enter</v-btn>
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
