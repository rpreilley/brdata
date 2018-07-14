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
                :items="selections"
                label="Crime Type"
                v-model="selection"
              ></v-select>
              <v-btn large color="primary" class="mx-0" @click.stop="$router.go(-1)">Back</v-btn>
              <v-btn
                class="mx-0"
                color="primary"
                large
                @click="submit"
              >
                Submit
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
      <v-data-table
        :headers="headers"
        :items="items"
        hide-actions
        class="elevation-1"
        v-show="showTable"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.calories }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="text-xs-right">{{ props.item.iron }}</td>
        </template>
      </v-data-table>
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
      selections: ['Battery', 'Criminal Damage To Property', 'Firearm', 'Vehicle Burglary', 'Sexual Assault', 'Other'],
      selection: '',
      headers: [],
      items: [],
      showTable: false
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
