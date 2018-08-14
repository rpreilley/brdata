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

    <v-layout row>
      <v-flex xs12>
        <v-menu
          ref="menu"
          :close-on-content-click="false"
          v-model="menu"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="dateFormatted"
            label="Date"
            persistent-hint
            prepend-icon="event"
            @blur="date = parseDate(dateFormatted)"
          ></v-text-field>
          <v-date-picker v-model="date" no-title @input="menu = false"></v-date-picker>
        </v-menu>
      </v-flex>
    </v-layout>
    <v-layout row v-show="date">
      <v-flex xs10 offset-xs1>
        <v-card>
          <v-card-media
            :src="this.image"
            height="200px"
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
      dateFormatted: null,
      menu: false,
      today: null,
      title: '',
      image: '',
      description: ''
    }
  },
  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    }
  },
  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
      this.dateSelection()
    }
  },
  methods: {
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    async dateSelection () {
      let baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=I5HBsa9k5l5rBvl0dG9MBE7Zi1VaTjrpzg03xFpm&date='
      let fullUrl = `${baseUrl}${this.date}`

      try {
        let response = await ApiService.get(fullUrl)
        this.title = response.data.title
        this.image = response.data.url
        this.description = response.data.explanation
      } catch (e) {
        this.errors.push(e)
      }
      this.label = this.date
      this.menu = false
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
