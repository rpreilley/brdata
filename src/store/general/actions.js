'use strict'

const actions = {
  // updateGeneralStore ({commit, state}, data) {
  //   commit('updateGeneralStore', {
  //     logInForm: data.logInForm,
  //     signUpForm: data.signUpForm,
  //     settingsForm: data.settingsForm
  //   })
  // }

  changeMainDrawer ({commit, state}, data) {
    commit('changeMainDrawer', {
      mainDrawer: data.mainDrawer
    })
  }
}

export default actions
