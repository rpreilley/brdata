<template>
  <v-jumbotron>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Welcome to the project</h3>
          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Sign up or log in below.</div>
          <v-btn large color="primary" class="mx-0" @click.stop="signUpForm = true">Sign Up</v-btn>
          <v-btn large color="primary" class="mx-0" @click.stop="logInForm = true">Log In</v-btn>
        </v-flex>
      </v-layout>

      <!-- SIGN UP FORM -->
      <v-layout row justify-center>
        <v-dialog v-model="signUpForm" max-width="500px">
          <form>
            <v-card>
              <v-card-title>
                Sign Up
              </v-card-title>
              <v-card-text>
                <v-text-field
                  :error-messages="firstNameErrors"
                  :counter="20"
                  v-model="firstName"
                  label="First Name"
                  required
                  @input="$v.firstName.$touch()"
                  @blur="$v.firstName.$touch()"
                ></v-text-field>
                <v-text-field
                  :error-messages="lastNameErrors"
                  :counter="20"
                  v-model="lastName"
                  label="Last Name"
                  required
                  @input="$v.lastName.$touch()"
                  @blur="$v.lastName.$touch()"
                ></v-text-field>
                <v-text-field
                  :error-messages="emailErrors"
                  :counter="30"
                  v-model="email"
                  label="E-mail"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
                <v-text-field
                  :error-messages="passwordErrors"
                  :counter="20"
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                ></v-text-field>
                <v-text-field
                  :error-messages="confirmPasswordErrors"
                  :counter="20"
                  v-model="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  required
                  @input="$v.confirmPassword.$touch()"
                  @blur="$v.confirmPassword.$touch()"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="signUpSubmit" color="primary">Submit</v-btn>
                <v-btn @click="clear" color="primary">clear</v-btn>
              </v-card-actions>
            </v-card>
          </form>
        </v-dialog>
      </v-layout>

      <!-- LOG IN FORM -->
      <v-layout row justify-center>
        <v-dialog v-model="logInForm" max-width="500px">
          <form>
            <v-card>
              <v-card-title>
                Log In
              </v-card-title>
              <v-card-text>
                <v-text-field
                  :error-messages="emailErrors"
                  :counter="30"
                  v-model="email"
                  label="Email Address"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
                <v-text-field
                  :error-messages="passwordErrors"
                  :counter="20"
                  v-model="password"
                  label="Password"
                  type="password"
                  required
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="logInSubmit" color="primary">Submit</v-btn>
                <v-btn @click="clear" color="primary">clear</v-btn>
              </v-card-actions>
            </v-card>
          </form>
        </v-dialog>
      </v-layout>

    </v-container>
  </v-jumbotron>
</template>

<script>
// import ApiService from '@/services/ApiService.js'
import methods from './methods.js'
import computed from './computed.js'

import { validationMixin } from 'vuelidate'
import { required, maxLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'Landing',
  mixins: [validationMixin],
  validations: {
    firstName: { required, maxLength: maxLength(20) },
    lastName: { required, maxLength: maxLength(20) },
    email: { required, email, maxLength: maxLength(30) },
    password: { required, maxLength: maxLength(20) },
    confirmPassword: { required, maxLength: maxLength(20), sameAs: sameAs('password') }
  },
  data () {
    return {
      logInForm: false,
      signUpForm: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: methods,
  computed: computed,
  created () {

  }
}
</script>
