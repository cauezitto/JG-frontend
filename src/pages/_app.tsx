import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import StatesProvider from 'context'
import theme from 'styles/theme'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'utils/apollo'
import { CookiesProvider } from 'react-cookie'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)
  return (
    <CookiesProvider>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <StatesProvider>
            <Head>
              <title>JG Empório da malha</title>
              <link rel="shortcut icon" href="/img/icon-512.png" />
              <link rel="apple-touch-icon" href="/img/icon-512.png" />
              <link rel="manifest" href="/manifest.json" />
              <meta
                name="description"
                content="Camisetas de marca e de time personalizadas"
              />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
          </StatesProvider>
        </ThemeProvider>
      </ApolloProvider>
    </CookiesProvider>
  )
}

export default App
