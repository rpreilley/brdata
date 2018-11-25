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
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'testingArea',
  components: {
    brTextField: () => import('@/controls/brTextField.vue')
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
