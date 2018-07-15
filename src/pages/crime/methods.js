import ApiService from '@/services/ApiService.js'

const methods = {
  async submit () {
    this.items = []
    this.showTable = false
    this.loading = true
    let selection = this.selection.replace(/\s/g, '_').toUpperCase()
    let url = `https://data.brla.gov/resource/5rji-ddnu.json?crime=${[selection]}`
    let response = await ApiService.get(url)

    for (let i = 0; i < response.data.length; i++) {
      this.items.push(response.data[i])
    }

    this.loading = false
    this.showTable = true
  },
  changeSort (column) {
    if (this.pagination.sortBy === column) {
      this.pagination.descending = !this.pagination.descending
    } else {
      this.pagination.sortBy = column
      this.pagination.descending = false
    }
  }
}

export default methods
