<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs10 offset-sm1>
        <h3 class="display-3">OMDB API</h3>
        <span class="subheading">This page utilizes the OMDB API for movie titles. This API features an image of the day and a description, along with other information such as </span>
        <v-divider class="my-3"></v-divider>
        <div class="title mb-3">Please enter a movie title.</div>
        <v-text-field
          v-model="selection"
          label="Title"
        ></v-text-field>
        <v-btn color="primary" @click="titleSelection">Submit</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row v-for="title in this.results" :key="title.imdbID">
      <v-flex xs4>
        <v-card>
          <v-card-media
            :src="title.Poster"
            height="200px"
          >
          </v-card-media>

          <v-card-title primary-title>
            <div>
              <div class="headline">{{ title.Title }}</div>
              <span class="grey--text">{{ title.Year }}</span>
              <span class="grey--text">{{ title.Type }}</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat>Share</v-btn>
            <v-btn flat color="purple">Explore</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ApiService from '@/services/ApiService.js'
import config from '@/constants/config.js'

export default {
  name: 'Movies',
  data () {
    return {
      key: config,
      selection: '',
      results: []
    }
  },
  methods: {
    async titleSelection () {
      let baseUrl = `http://www.omdbapi.com/?apikey=${this.key.OMDB_API}&s=${this.selection}`

      try {
        let response = await ApiService.get(baseUrl)
        this.results = response.data.Search
      } catch (e) {
        this.errors.push(e)
      }
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
