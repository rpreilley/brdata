import ApiService from '@/services/ApiService.js'

const methods = {
  async submit () {
    this.loading = true
    let selection = this.selection.replace(/\s/g, '').toUpperCase()
    let url = `https://data.brla.gov/resource/5rji-ddnu.json?crime=${selection}`
    let response = await ApiService.get(url)

    for (let i = 0; i < response.data.length; i++) {
      this.items.push(response.data[i])
    }

    this.loading = false
    this.showTable = true
  }
}

export default methods
