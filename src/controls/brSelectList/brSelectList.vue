<template>
  <v-flex>
    <v-select
      ref="selectList"
      v-model="e6"
      :menu-props="{ maxHeight: '400' }"
      :label="label"
      :value="value"
      :items="items"
      :multiple="multiple"
      :hint="hint"
      :placeholder="placeholder"
      persistent-hint
    ></v-select>
  </v-flex>
</template>

<script>
import { props } from './props.js'

export default {
  name: 'brSelectList',
  props: props,
  data () {
    return {
      e6: []
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
