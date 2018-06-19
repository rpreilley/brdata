import ApiService from '@/services/ApiService.js'

const methods = {
  submit () {
    this.$v.$touch()
  },
  async getUsers () {
    try {
      let response = await ApiService.get(`http://localhost:3000/user/`)
      console.log('ALL USERS', response.data)
      this.$router.push({
        name: 'Home',
        params: { id: response.data._id }
      })
    } catch (e) {
      this.errors.push(e)
    }
  },
  async logInSubmit () {
    let logInData = {
      email: this.email,
      password: this.password
    }
    try {
      let response = await ApiService.post(`http://localhost:3000/user/login`, logInData)
      this.$store.commit('updateUserStore', response.data)
      this.logInForm = false
      this.$router.push({
        name: 'Home',
        params: { id: response.data._id }
      })
    } catch (e) {
      this.errors.push(e)
    }
  },
  async signUpSubmit () {
    let signUpData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }
    try {
      let response = await ApiService.post(`http://localhost:3000/user/signup`, signUpData)
      this.$router.push({
        name: 'Landing',
        params: { id: response.data._id }
      })
      this.signUpForm = false
    } catch (e) {
      this.errors.push(e)
    }
  },
  clear () {
    this.$v.$reset()
    this.firstName = ''
    this.lastName = ''
    this.email = ''
    this.password = ''
    this.confirmPassword = ''
  },
  async getAllUsers () {
    try {
      let response = await ApiService.get(`http://localhost:3000/users`)
      this.users = response.data
    } catch (e) {
      this.errors.push(e)
    }
  }
}

export default methods
