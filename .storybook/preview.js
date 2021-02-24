import '../styles/_globalStorybook.scss'
import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { addParameters } from '@storybook/react'

addDecorator(withInfo)
addParameters({
  backgrounds: {
    default: 'deep-blue',
    values: [
      { name: 'yellow', value: '#ffc205' },
      { name: 'deep-blue', value: '#0a1726' },
    ],
  },
})
