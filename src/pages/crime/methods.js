import ApiService from '@/services/ApiService.js'

const methods = {
  async submit () {
    let selection = this.selection.replace(/\s/g,'').toUpperCase()
    let url = `https://data.brla.gov/resource/5rji-ddnu.json?crime=${selection}`
    let response = await ApiService.get(url)
    debugger
  }
}

export default methods
