<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <form>
          <v-flex
            v-for="field in fields"
            :key="field.key"
            :class="getFieldLayout(field)"
          >

            <br-text-field v-if="brTextFieldTypes.includes(field.type)"
              :key="field.key"
              :label="field.label"
              :hint="field.hint"
            >
            </br-text-field>

            <br-text-area v-if="brTextAreaTypes.includes(field.type)"
              :key="field.key"
              :label="field.label"
              :hint="field.hint"
            >
            </br-text-area>

          </v-flex>
        </form>
      </v-flex>
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
      brTextFieldTypes: [
        Fields.TEXT
      ],
      brTextAreaTypes: [
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
