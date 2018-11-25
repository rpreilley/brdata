import {Fields} from '@/aco/types/field.js'
import {Layout} from '@/aco/types/layout.js'

const fields = [
  {
    key: 'text-field',
    label: 'Text Field',
    hint: 'Text Field',
    type: Fields.TEXT,
    layout: Layout.L12
  },
  {
    key: 'text-area',
    label: 'Text Area',
    hint: 'Text Area',
    type: Fields.TEXTAREA,
    layout: Layout.L12
  }
]

export default fields
