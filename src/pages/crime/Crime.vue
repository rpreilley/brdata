<template>
  <v-layout>
    <v-flex>
      <v-jumbotron>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3">Baton Rouge Crime Map</h3>

              <span class="subheading">This map will show attempted and committed crime locations by crime type on a map of Baton Rouge, Louisiana.</span>

              <v-divider class="my-3"></v-divider>

              <div class="title mb-3">Please select a crime type.</div>
              <v-select
                :items="items"
                label="Crime Type"
              ></v-select>
              <v-btn large color="primary" class="mx-0" @click.stop="$router.go(-1)">Back</v-btn>
              <v-btn
                class="mx-0"
                color="primary"
                large
              >
                Submit
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </v-flex>
  </v-layout>
</template>

<script>
import methods from './methods.js'
import computed from './computed.js'

export default {
  name: 'Home',
  data () {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  },
  methods: methods,
  computed: computed,
  created () {

  }
}
</script>
