'use strict'

const actions = {
  // updateGeneralStore ({commit, state}, data) {
  //   commit('updateGeneralStore', {
  //     logInForm: data.logInForm,
  //     signUpForm: data.signUpForm,
  //     settingsForm: data.settingsForm
  //   })
  // }

  changeMainDrawer (context) {
    context.commit('changeMainDrawer')
  },
  changeMusicSetting (context) {
    context.commit('changeMusicSetting')
  }
}

export default actions
