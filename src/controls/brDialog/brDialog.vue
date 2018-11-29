<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-dialog
          v-model="show"
          width="500"
          persistent
          >
          <v-card>
            <v-card-title> {{ title }} </v-card-title>
            <slot name="content"></slot>
            <v-card-actions>
              <v-btn
                v-for="button in buttons"
                :key="button.label"
                small
                @click.native="click(button)"
              >
                {{ button.label }}
              </v-btn>
              <v-btn
                v-if="showCloseButton"
                small
                @click.native="closeDialog()"
              >
                {{ closeButtonLabel }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
    async click (button) {
      debugger
      const response = await button.callback(button.data)
      debugger
      if (response.close) {
        this.closeDialog()
      }
    },
    closeDialog () {
      this.$emit('close')
    }
  },
  computed: {

  }
}
</script>

<style>

</style>
