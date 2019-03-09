import {Fields} from '@/aco/types/field.js'
import {Layout} from '@/aco/types/layout.js'

const testFields = [
  {
    key: 'text-field',
    label: 'Text Field',
    placeholder: 'First Name',
    hint: 'Text Field',
    type: Fields.TEXT,
    layout: Layout.L12
  },
  {
    key: 'text-field2',
    label: 'Text Field2',
    placeholder: 'Last Name',
    hint: 'Text Field2',
    type: Fields.TEXT,
    layout: Layout.L6
  },
  {
    key: 'text-field3',
    label: 'Text field3',
    placeholder: 'Email Address',
    hint: 'Text Field3',
    type: Fields.TEXT,
    layout: Layout.L6
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
