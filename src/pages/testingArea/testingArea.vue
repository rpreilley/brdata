<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <div>Testing Area</div>
        <br-form
          :fields="fields"
        >
        </br-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import formFields from './formFields.js'

export default {
  name: 'testingArea',
  components: {
    brTextField: () => import('@/controls/brTextField/brTextField.vue'),
    brTextArea: () => import('@/controls/brTextArea/brTextArea.vue'),
    brForm: () => import('@/controls/brForm/brForm.vue')
  },
  data () {
    return {
      fields: formFields
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
