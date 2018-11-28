<template>
  <v-flex>
    <v-text-field
      ref="textField"
      :label="label"
      :hint="hint"
      :value="value"
      @input="value => $emit('input', value)"
      @change="value => $emit('input', value)"
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
