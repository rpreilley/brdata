<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs10 offset-xs1>
        <div>Testing Area</div>
        <!--<br-text-field
          label="Text Field"
          hint="this is a hint"
          placeholder="this is a placeholder"
          >
        </br-text-field>
        <br-text-area
          label="Text Area"
          hint="this is a hint"
          placeholder="this is a placeholder"
          >
        </br-text-area>-->
        <br-form
          v-bind="fields"
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
