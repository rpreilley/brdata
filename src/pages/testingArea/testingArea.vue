<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs10 offset-xs1>
        <div>Testing Area</div>
        <br-text-field
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
        </br-text-area>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'testingArea',
  components: {
    brTextField: () => import('@/controls/brTextField/brTextField.vue'),
    brTextArea: () => import('@/controls/brTextArea/brTextArea.vue')
  },
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
