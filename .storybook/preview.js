import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import StatesProvider from '../src/context'
import theme from 'styles/theme'

addDecorator(withNextRouter())

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <StatesProvider>
          <GlobalStyles />
          <Story />
        </StatesProvider>
      </ThemeProvider>
    </>
  )
]
