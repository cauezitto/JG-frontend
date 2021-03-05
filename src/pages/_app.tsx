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
              <meta property="og:site_name" content="JG Empório da malha" />
              <meta property="og:title" content="JG Empório da malha" />
              <meta
                name="description"
                content="Comprar camisetas de time importadas é na JG empório da malha. Compre agora o manto do seu time do coração. "
              />
              <meta
                property="og:description"
                content="Comprar camisetas de time importadas é na JG empório da malha. Compre agora o manto do seu time do coração."
              />
              <meta property="og:image" content="/img/bannerHome1.jpeg" />
              <meta property="og:image:type" content="image/jpeg"></meta>
              <meta property="og:type" content="website"></meta>
              <meta property="og:locale" content="pt_BR"></meta>
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/img/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/img/favicon-32x32.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/img/favicon-16x16.png"
              />
              <link
                rel="mask-icon"
                href="/img/safari-pinned-tab.svg"
                color="#5bbad5"
              />
              <meta name="msapplication-TileColor" content="#da532c" />
              <meta name="theme-color" content="#ffffff" />
              <link rel="manifest" href="/manifest.json" />
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
