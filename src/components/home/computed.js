import { mapGetters } from 'vuex'

const computed = {
  ...mapGetters([
    'settingsFormState'
  ]),
  firstName () {
    return (this.$store.state.user) ? `${this.$store.state.user.firstName}` : ''
  },
  fullName () {
    return (this.$store.state.user) ? `${this.$store.state.user.firstName} ${this.$store.state.user.lastName}` : ''
  },
  loggedIn () {
    return (this.$store.state.user.loggedIn) ? true : false
  }
}

export default computed
