<template>
  <v-flex>
    <v-textarea
      :label="label"
      :hint="hint"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :clearable="clearable"
      :disabled="disabled"
      :required="required"
    ></v-textarea>
  </v-flex>
</template>

<script>
import { props } from './props.js'

export default {
  name: 'brTextArea',
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
