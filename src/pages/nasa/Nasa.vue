<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <h3 class="display-3">NASA POD API</h3>
        <span class="subheading">This page utilizes the NASA POD API. This API features an image of the day and a description, along with other information such as </span>
        <v-divider class="my-3"></v-divider>
        <div class="title mb-3">Please select a date.</div>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm4 md4 v-show="this.today">
        <v-menu
          ref="menu"
          :close-on-content-click="true"
          v-model="menu"
          :nudge-right="10"
          :return-value.sync="date"
          lazy
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="date"
            :label="this.today"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex>

      <v-flex xs12 sm8 md8 v-show="pod">
        <v-card>
          <v-card-media
            :src="this.image"
            height="400px"
          ></v-card-media>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ this.title }}</h3>
              <v-divider class="my-3"></v-divider>
              <div>{{ this.description }}</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn color="primary">Share</v-btn>
            <v-btn color="primary">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import ApiService from '@/services/ApiService.js'

export default {
  name: 'Nasa',
  data () {
    return {
      date: null,
      menu: false,
      today: null,
      pod: false,
      title: '',
      image: '',
      description: ''
    }
  },
  computed: {
    src: {
      get: function () {
        return this.image
      },
      set: function (newValue) {
        debugger
      }
    }
  },
  methods: {
    async dateSelection () {
      let today = new Date()
      this.today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + ('0' + today.getDate()).slice(-2)

      let baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=I5HBsa9k5l5rBvl0dG9MBE7Zi1VaTjrpzg03xFpm&date='

      let fullUrl = `${baseUrl}${this.today}`

      try {
        let response = await ApiService.get(fullUrl)
        this.title = response.data.title
        this.image = response.data.url
        this.description = response.data.explanation
        this.pod = true
      } catch (e) {
        this.errors.push(e)
      }
    }
  },
  created () {

  },
  mounted () {
    this.dateSelection()
  }
}
</script>
