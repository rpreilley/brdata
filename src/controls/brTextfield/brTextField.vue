<template>
  <v-flex>
    <v-text-field
      :label="label"
      :hint="hint"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :clearable="clearable"
      :disabled="disabled"
      :required="required"
    ></v-text-field>
  </v-flex>
</template>

<script>
import { props } from './props.js'

export default {
  name: 'brTextField',
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
