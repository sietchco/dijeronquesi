import { extendTheme } from '@chakra-ui/react'

import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/tangerine/400.css'

const colors = {
  'ui-black': '#1A0C1B',
  'ui-purple': '#6B1A3B',
  'ui-pink': '#F2D7EE',
  'ui-white': '#fff7ff',
}

const breakpoints = ['768px', '960px']

const fonts = {
  heading: `'Open Sans', sans-serif`,
  body: `'Raleway', sans-serif`,
  mono: `'Tangerine', cursive`,
}

const styles = {
  global: {
    'html, body': {
      backgroundColor: 'ui-white',
    },
    'input, select, textarea': {
      backgroundColor: 'white !important',
    },
  },
}

const components = {}

export const theme = extendTheme({ colors, styles, breakpoints, fonts, components })
