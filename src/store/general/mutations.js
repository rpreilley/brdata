const mutations = {
  // clearGeneralStore (data) {
  //   // Mutate state of general store
  //   data.logInForm = ''
  //   data.signUpForm = ''
  //   data.settingsForm = ''
  // }

  changeMainDrawer (data) {
    // Mutate state of general store
    data.mainDrawer = !data.mainDrawer
  },
  changeMusicSetting (data) {
    // Mutate state of general store
    data.music = !data.music
  }
}

export default mutations
