<template>
  <v-app id="app" dark>

    <!-- NAV DRAWER COMPONENT-->
    <app-drawer></app-drawer>

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
import testFields from '@/pages/testingArea/formFields.js'

export default {
  name: 'App',
  components: {
    AppHeader: () => import('@/components/header/Header.vue'),
    AppFooter: () => import('@/components/footer/Footer.vue'),
    AppDrawer: () => import('@/components/drawer/Drawer.vue'),
    BrForm: () => import('@/controls/brForm/brForm.vue'),
    BrDialog: () => import('@/controls/brDialog/brDialog.vue'),
    BrDataTable: () => import('@/controls/brDataTable/brDataTable.vue')
  },
  provide () {
    return {
      brHome_takeAction: this.takeAction
    }
  },
  data: () => {
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
            buttonCallback: this.testingFormSave,
            // closeButtonLabel: 'cancel',
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
      debugger
      // Set form fields and data from props
      this.$set(this.testingForm.form.props, 'fields', testFields)
      this.$set(this.testingForm.form.props, 'data', {})
      this.testingForm.dialog.props.show = true
    },
    async testingFormSave (data) {
      let success = false
      return { close: success }
    },
    async testingFormClose (data) {
      return { close: false }
    }
  },
  created () {

  },
  computed: {

  }
}
</script>

<style>

</style>
