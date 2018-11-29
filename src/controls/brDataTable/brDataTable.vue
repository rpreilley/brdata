<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="items"
          :itemKey="itemKey"
          :loading="loading"
          :rowsPerPageItems="rowsPerPageItems"
          :selectAll="selectAll"
          :sortIcon="sortIcon"
          :value="value"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.calories }}</td>
            <td>{{ props.item.fat }}</td>
            <td>{{ props.item.carbs }}</td>
            <td>{{ props.item.protein }}</td>
            <td>{{ props.item.iron }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { props } from './props.js'

export default {
  name: 'brDataTable',
  components: {

  },
  props: props,
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style>

</style>
