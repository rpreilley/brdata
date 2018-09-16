<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs10 offset-sm1>
        <h3 class="display-3">Harry Potter API</h3>
        <span class="subheading">This page utilizes the Harry Potter API to tap into some Harry Potter information. This API features endpoints that return HP characters, a random house for the sorting hat, spells, and house details. I'm a massive Harry Potter geek, so it's going in here. </span>
        <v-divider class="my-3"></v-divider>
        <div class="title mb-3">Enjoy.</div>
        <!--<v-text-field
          v-model="selection"
          label="Title"
        ></v-text-field>
        <v-btn color="primary" @click="titleSelection">Submit</v-btn>-->
      </v-flex>
    </v-layout>

    <v-container>
      <v-layout>
        <v-flex xs10 offset-sm1>
          <v-card color="primary">
            <v-container
              fluid
              grid-list-md
            >
              <v-layout row wrap>
                <v-flex
                  v-for="character in this.results" :key="character._id">
                  <v-card>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">{{ character.name }}</h3>
                        <h4 class="mb-0">House: {{ character.house }}</h4>
                        <h4 class="mb-0">Blood Status: {{ character.bloodStatus }}</h4>
                        <h4 class="mb-0">Death Eater: {{ character.deathEater | convertBool }}</h4>
                        <h4 class="mb-0">Member of Dumbledores Army: {{ character.dumbledoresArmy | convertBool }}</h4>
                        <h4 class="mb-0">Member of the Ministry of Magic: {{ character.ministryOfMagic | convertBool }}</h4>
                        <h4 class="mb-0">Member of the Order of the Phoenix: {{ character.orderOfThePhoenix | convertBool }}</h4>
                        <h4 class="mb-0">Role: {{ character.role }}</h4>
                        <h4 class="mb-0">School: {{ character.school }}</h4>
                        <h4 class="mb-0">Species: {{ character.species }}</h4>
                      </div>
                    </v-card-title>
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
    async getCharacters () {
      let baseUrl = `https://www.potterapi.com/v1/characters?key=${this.key.HARRY_POTTER_API_KEY}`

      try {
        let response = await ApiService.get(baseUrl)
        this.results = response.data
      } catch (e) {
        this.errors.push(e)
      }
    }
  },
  filters: {
    convertBool: function (value) {
      if (value === true) {
        return 'Yes'
      } else {
        return 'No'
      }
    }
  },
  created () {
    this.getCharacters()
  },
  mounted () {

  }
}
</script>
