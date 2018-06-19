const computed = {
  firstNameErrors () {
    const errors = []
    if (!this.$v.firstName.$dirty) return errors
    !this.$v.firstName.maxLength && errors.push('First Name can not be more than 20 characters long')
    !this.$v.firstName.required && errors.push('First Name is required')
    return errors
  },
  lastNameErrors () {
    const errors = []
    if (!this.$v.lastName.$dirty) return errors
    !this.$v.lastName.maxLength && errors.push('Last Name can not be more than 20 characters long')
    !this.$v.lastName.required && errors.push('Last Name is required')
    return errors
  },
  emailErrors () {
    const errors = []
    if (!this.$v.email.$dirty) return errors
    !this.$v.lastName.maxLength && errors.push('Email can not be more than 30 characters long')
    !this.$v.email.email && errors.push('Must be valid e-mail')
    !this.$v.email.required && errors.push('E-mail is required')
    return errors
  },
  passwordErrors () {
    const errors = []
    if (!this.$v.password.$dirty) return errors
    !this.$v.lastName.maxLength && errors.push('Password can not be more than 20 characters long')
    !this.$v.password.required && errors.push('Password is required')
    return errors
  },
  confirmPasswordErrors () {
    const errors = []
    if (!this.$v.confirmPassword.$dirty) return errors
    !this.$v.lastName.maxLength && errors.push('Confirm Password can not be more than 20 characters long')
    !this.$v.confirmPassword.required && errors.push('Comfirm Password is required')
    !this.$v.confirmPassword.sameAs && errors.push('Must match password field')
    return errors
  }
}

export default computed
