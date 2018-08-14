<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <h3 class="display-3">NASA Picture of the Day.</h3>
        <span class="subheading">This page utilizes the NASA POD API. This API features an image of the day and a description, along with other information such as </span>
        <v-divider class="my-3"></v-divider>
        <div class="title mb-3">Please select a date.</div>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm6 md6>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-flex>
    </v-layout>
    <v-divider class="my-3" vertical></v-divider>
  </v-container>
</template>

<script>
export default {
  name: 'Nasa',
  data () {
    return {
      date: null,
      menu: false
    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

  }
}
</script>
