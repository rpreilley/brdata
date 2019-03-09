<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <form>
          <v-layout row wrap>
            <v-flex
              ref="form"
              v-for="field in fields"
              :key="field.key"
              :class="getFieldLayout(field)"
              class="br-form-inputs"
            >

              <br-text-field v-if="brTextFieldTypes.includes(field.type)"
                :ref="field.key"
                :id="field.key"
                :key="field.key"
                :label="field.label"
                :hint="field.hint"
                :value="value"
                :placeholder="placeholder"
                :autofocus="autofocus"
                :clearable="clearable"
                :disabled="disabled"
                :required="required"
              >
              </br-text-field>

              <br-text-area v-else-if="brTextAreaTypes.includes(field.type)"
                :ref="field.key"
                :id="field.key"
                :key="field.key"
                :label="field.label"
                :hint="field.hint"
                :value="value"
                :placeholder="placeholder"
                :autofocus="autofocus"
                :clearable="clearable"
                :disabled="disabled"
                :required="required"
              >
              </br-text-area>

              <br-select-list v-else-if="brSelectListTypes.includes(field.type)"
                :ref="field.key"
                :id="field.key"
                :key="field.key"
                :label="field.label"
                :value="value"
                :items="field.items"
                :hint="field.hint"
                :placeholder="placeholder"
                :multiple="field.multiple"
                :disabled="disabled"
                :required="required"
              >
              </br-select-list>

              <div v-else>Unsupported field type: {{ field.type }}</div>
            </v-flex>
          </v-layout>
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
    brTextArea: () => import('@/controls/brTextArea/brTextArea.vue'),
    brSelectList: () => import('@/controls/brSelectList/brSelectList.vue')
  },
  props: props,
  data () {
    return {
      brTextFieldTypes: [
        Fields.TEXT
      ],
      brTextAreaTypes: [
        Fields.TEXTAREA
      ],
      brSelectListTypes: [
        Fields.SELECTLIST
      ]
    }
  },
  methods: {
    getFieldLayout (field) {
      return field.layout
    }
  }
}
</script>

<style>
  .br-form-inputs {
    padding: 0 .5rem;
  }
</style>
