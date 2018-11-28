export const props = {
  label: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => []
  },
  hint: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  multiple: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  value: {
    type: null
  }
}
