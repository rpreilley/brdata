<template>
  <v-flex>
    <v-textarea
      ref="textArea"
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
