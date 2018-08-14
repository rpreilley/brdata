<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <v-jumbotron>
          <h3 class="display-3">Welcome to my portfolio.</h3>
          <span class="subheading">Hello! My name is Bob Reilley, and I am a software developer who loves to help build beautiful web sites and intuitive web applications that will make peoples everyday lives easier. I built this portfolio using the Vue.js framework and utilized Vuetify's Material Design Component kit. I have included a few projects small Vue projects that you can check out by clicking the menu icon at the top left corner of the page. Thanks for visiting!</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Enjoy the site.</div>
        </v-jumbotron>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs12>
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">About myself</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">Skills</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">Websites</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card
                class="mb-5"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn
                color="primary"
                @click="e1 = 2"
              >
                Continue
              </v-btn>

              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card
                class="mb-5"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn
                color="primary"
                @click="e1 = 3"
              >
                Continue
              </v-btn>

              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card
                class="mb-5"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn
                color="primary"
                @click="e1 = 1"
              >
                Continue
              </v-btn>

              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import methods from './methods.js'
import computed from './computed.js'

export default {
  name: 'Home',
  data () {
    return {
      e1: 0
    }
  },
  methods: methods,
  computed: computed,
  created () {

  },
  mounted () {

  }
}
</script>
