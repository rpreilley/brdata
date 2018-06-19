import ApiService from '@/services/ApiService.js'

const methods = {
  async getAllUsers () {
    try {
      let response = await ApiService.get(`http://localhost:3000/user`)
      this.users = response.data
    } catch (e) {
      this.errors.push(e)
    }
  },
  settingsForm () {
    this.$store.commit('settingsFormState')
  }
}

export default methods
