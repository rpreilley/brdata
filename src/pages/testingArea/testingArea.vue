<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <div>Testing Area</div>
        <br-data-table
          v-bind="brDataTableProps"
        >
        </br-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import formFields from './formFields.js'
import dataTableProps from './dataTableProps.js'

export default {
  name: 'testingArea',
  components: {
    brTextField: () => import('@/controls/brTextField/brTextField.vue'),
    brTextArea: () => import('@/controls/brTextArea/brTextArea.vue'),
    brForm: () => import('@/controls/brForm/brForm.vue'),
    brDataTable: () => import('@/controls/brDataTable/brDataTable.vue')
  },
  data () {
    return {
      fields: formFields,
      brDataTableProps: dataTableProps
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
