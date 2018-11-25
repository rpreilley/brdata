<template>
  <v-container>
    <v-layout>
      <form>
        <v-flex
          v-for="field in fields"
          :key="field.key"
        >

          <br-text-field v-if="brTextTypes.includes(field.type)"
            :key="field.key"
            :label="field.label"
            :hint="field.hint"
          >
          </br-text-field>

          <br-text-area v-if="brTextTypes.includes(field.type)"
            :key="field.key"
            :label="field.label"
            :hint="field.hint"
          >
          </br-text-area>

          <div v-else>
            Field Type is unsupported: {{field.type}}
          </div>

        </v-flex>
      </form>
    </v-layout>
  </v-container>
</template>

<script>
import {Fields} from '@/aco/types/field.js'
import { props } from './props.js'

export default {
  name: 'brForm',
  components: {
    brTextField: () => import('@/controls/brTextField/brTextField.vue'),
    brTextArea: () => import('@/controls/brTextArea/brTextArea.vue')
  },
  props: props,
  data () {
    return {
      brTextTypes: [
        Fields.TEXT,
        Fields.TEXTAREA
      ]
    }
  },
  methods: {
    setFields () {

    },
    getFieldLayout (field) {
      return field.layout
    }
  },
  computed: {

  },
  created () {
    this.setFields()
  }
}
</script>

<style>

</style>
