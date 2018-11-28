import {Fields} from '@/aco/types/field.js'
import {Layout} from '@/aco/types/layout.js'

const testFields = [
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
    layout: Layout.L6
  },
  {
    key: 'select-list',
    label: 'Select List',
    hint: 'Select List',
    type: Fields.SELECTLIST,
    layout: Layout.L6,
    items: [
      {
        text: 'Option 1',
        value: 1
      },
      {
        text: 'Option 2',
        value: 2
      }
    ]
  }
]

export default testFields
