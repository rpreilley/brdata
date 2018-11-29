export const props = {
  headers: {
    type: Array,
    default: () => []
  },
  items: {
    type: Array,
    default: () => []
  },
  itemKey: {
    type: String,
    default: 'id'
  },
  loading: {
    type: Boolean,
    default: false
  },
  rowsPerPageItems: {
    type: Array,
    default: () => [5, 10, 25, { 'text': '$vuetify.dataIterator.rowsPerPageAll', 'value': -1 }]
  },
  selectAll: {
    type: Boolean,
    default: false
  },
  sortIcon: {
    type: String,
    default: '$vuetify.icons.sort'
  },
  value: {
    type: Array,
    default: () => []
  }
}
