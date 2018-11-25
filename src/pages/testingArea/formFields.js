import {Fields} from '@/aco/types/field.js'
import {Layout} from '@/aco/types/layout.js'

const fields = [
  {
    key: 'name',
    label: 'Text Field',
    hint: 'Text Field',
    type: Fields.TEXT,
    // layout: Layout.L6
  },
  {
    key: 'name2',
    label: 'Text Area',
    hint: 'Text Area',
    type: Fields.TEXTAREA,
    // layout: Layout.L6
  }
]

export default fields
