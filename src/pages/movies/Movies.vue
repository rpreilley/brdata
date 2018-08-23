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

    <v-container>
      <v-layout>
        <v-flex xs10 offset-sm1>
          <v-card>
            <v-container
              fluid
              grid-list-md
            >
              <v-layout row wrap>
                <v-flex
                  v-for="title in this.results" :key="title.imdbID"
                >
                  <v-card>
                    <v-card-media
                      :src="title.Poster"
                      height="200px"
                    >
                      <v-container
                        fill-height
                        fluid
                        pa-2
                      >
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span class="headline white--text" v-text="title.Title"></span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-media>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>favorite</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>bookmark</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>share</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

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
