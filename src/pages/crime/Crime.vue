<template>
  <div>
    <v-jumbotron>
      <v-container fill-height>
        <v-layout>
          <v-flex>
            <h3 class="display-3">Baton Rouge Crime Map</h3>

            <span class="subheading">This map will show attempted and committed crime locations by crime type on a map of Baton Rouge, Louisiana.</span>

            <v-divider class="my-3"></v-divider>

            <div class="title mb-3">Please select a crime type.</div>
            <v-select
              :items="selections"
              label="Crime Type"
              item-text="title"
              item-value="value"
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

    <v-flex class="text-xs-center">
      <v-progress-circular
        :size="70"
        :width="4"
        color="primary"
        indeterminate
        v-show="loading"
      ></v-progress-circular>
    </v-flex>

    <v-container>
      <v-layout>
        <v-flex xs12>
          <v-data-table
            v-show="showTable"
            v-model="selected"
            :headers="headers"
            :items="items"
            :pagination.sync="pagination"
            select-all
            item-key="file_number"
            class="elevation-1"
          >
            <template slot="headers" slot-scope="props">
              <tr>
                <th
                  v-for="header in props.headers"
                  :key="header.text"
                  :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                  @click="changeSort(header.value)"
                   class="text-xs-center"
                >
                  <v-icon small>arrow_upward</v-icon>
                  {{ header.text }}
                </th>
              </tr>
            </template>
            <template slot="items" slot-scope="props">
              <tr>
                <td class="text-xs-center">{{ props.item.file_number }}</td>
                <td class="text-xs-center">{{ props.item.offense_date }}</td>
                <td class="text-xs-center">{{ props.item.offense_time }}</td>
                <td class="text-xs-center">{{ props.item.crime }}</td>
                <td class="text-xs-center">{{ props.item.a_c }}</td>
                <td class="text-xs-center">{{ props.item.offense_desc }}</td>
                <td class="text-xs-center">{{ props.item.address }}</td>
                <td class="text-xs-center">{{ props.item.st_number }}</td>
                <td class="text-xs-center">{{ props.item.st_dir }}</td>
                <td class="text-xs-center">{{ props.item.st_name }}</td>
                <td class="text-xs-center">{{ props.item.st_type }}</td>
                <td class="text-xs-center">{{ props.item.city }}</td>
                <td class="text-xs-center">{{ props.item.state }}</td>
                <td class="text-xs-center">{{ props.item.district }}</td>
                <td class="text-xs-center">{{ props.item.zone }}</td>
                <td class="text-xs-center">{{ props.item.subzone }}</td>
                <td class="text-xs-center">{{ props.item.complete_district }}</td>
                <td class="text-xs-center">{{ props.item.geolocation_state }}</td>
                <td class="text-xs-center">{{ props.item.council }}</td>
                <td class="text-xs-center">{{ props.item.geolocation_city }}</td>
                <td class="text-xs-center">{{ props.item.crime_prevention_dist }}</td>
                <td class="text-xs-center">{{ props.item.geolocation_address }}</td>
                <td class="text-xs-center">{{ props.item.new_zip }}</td>
                <td class="text-xs-center">{{ props.item.geolocation }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import methods from './methods.js'
import computed from './computed.js'

export default {
  name: 'Home',
  data () {
    return {
      pagination: {
        sortBy: ['offense_date']
      },
      selections: [
        {title: 'Assault', value: 'ASSAULT'},
        {title: 'Battery', value: 'BATTERY'},
        {title: 'Criminal Damage To Property', value: 'CRIMINAL DAMAGE TO PROPERTY'},
        {title: 'Firearm', value: 'FIREARM'},
        {title: 'Homicide', value: 'HOMICIDE'},
        {title: 'Individial Robbery', value: 'INDIVIDUAL ROBBERY'},
        {title: 'Narcotics', value: 'NARCOTICS'},
        {title: 'Non-Residential Burglary', value: 'NON-RESIDENTIAL BURGLARY'},
        {title: 'Nuisance', value: 'NUISANCE'},
        {title: 'Residential Burglary', value: 'RESIDENTIAL BURGLARY'},
        {title: 'Sexual Assault', value: 'SEXUAL ASSAULT'},
        {title: 'Theft', value: 'THEFT'},
        {title: 'Vehicle Burglary', value: 'VEHICLE BURGLARY'},
        {title: 'Vice', value: 'VICE'},
        {title: 'Other', value: 'OTHER'}
      ],
      selection: '',
      selected: [],
      headers: [
        {
          text: 'File Number',
          align: 'left',
          value: 'file_number'
        },
        { text: 'Offense Date', value: 'offense_date' },
        { text: 'Offense Time', value: 'offense_time' },
        { text: 'Crime', value: 'crime' },
        { text: 'Attempted or Committed', value: 'a_c' },
        { text: 'Offense', value: 'offense' },
        { text: 'Offense Desc', value: 'offense_desc' },
        { text: 'Address', value: 'address' },
        { text: 'Street Number', value: 'st_number' },
        { text: 'Street Direction', value: 'st_dir' },
        { text: 'Street Name', value: 'st_name' },
        { text: 'Street Type', value: 'st_type' },
        { text: 'City', value: 'city' },
        { text: 'State', value: 'state' },
        { text: 'District', value: 'district' },
        { text: 'Zone', value: 'zone' },
        { text: 'Subzone', value: 'subzone' },
        { text: 'Complete District', value: 'complete_district' },
        { text: 'Geolocation State', value: 'geolocation_state' },
        { text: 'Council', value: 'council' },
        { text: 'Geolocation City', value: 'geolocation_city' },
        { text: 'Geolocation Zip', value: 'geolocation_zip' },
        { text: 'Crime Prevention District', value: 'crime_prevention_dist' },
        { text: 'Geolocation Address', value: 'geolocation_address' },
        { text: 'New Zip', value: 'new_zip' },
        { text: 'Geolocation', value: 'geolocation' }
      ],
      items: [],
      showTable: false,
      loading: false
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
