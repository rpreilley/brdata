<template>
  <v-app id="app" dark>

    <!-- NAV DRAWER COMPONENT
    <app-drawer></app-drawer>-->

    <!-- TOOLBAR COMPONENT -->
    <app-header></app-header>

    <!-- ROUTER VIEW COMPONENT -->
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <!-- TESTING FORM DIALOG -->
    <br-dialog
      v-bind="testingForm.dialog.props"
      ref="brDialog"
      @close="testingForm.dialog.props.show = false"
    >
      <div slot="content">

        <br-form
          ref="brForm_testingForm"
          :fields="testingForm.form.props.fields"
          :data="testingForm.form.props.data"
        >
        </br-form>
      </div>
    </br-dialog>

    <!-- FOOTER COMPONENT -->
    <app-footer></app-footer>

  </v-app>
</template>

<script>
import ApiService from '@/services/ApiService.js'
import testFields from '@/pages/testingArea/formFields.js'

export default {
  name: 'App',
  components: {

  },
  provide () {
    return {
      brHome_takeAction: this.takeAction
    }
  },
  data () {
    return {
      testingForm: {
        form: {
          props: {
            fields: testFields,
            data: {}
          }
        },
        dialog: {
          props: {
            show: false,
            title: 'This is my form within a dialog',
            showCloseButton: true,
            closeButtonLabel: 'cancel',
            buttons: [
              {
                label: 'Save',
                data: {},
                callback: this.testingFormSave
              }
            ]
          }
        }
      }
    }
  },
  methods: {
    takeAction () {
      // Set form fields and data from props
      this.$set(this.testingForm.form.props, 'fields', testFields)
      this.$set(this.testingForm.form.props, 'data', {})
      this.testingForm.dialog.props.show = true
    },
    async testingFormSave (data) {
      let success = false
      let url = 'https://randomuser.me/api/'

      try {
        const response = await ApiService.get(url)

        if (response) {
          success = true
        }
      } catch (e) {
        success = false
      }

      return { close: success }
    },
    async testingFormClose (data) {
      return { close: false }
    }
  }
}
</script>

<style>

</style>
