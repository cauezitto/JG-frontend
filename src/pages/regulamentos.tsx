import React from 'react'
import PaddingWrapper from 'components/PaddingWrapper'
import DefaultTemplate from 'templates/Default'
import { HorizontalPaddingWrapper } from 'styles/pages/home'
import { RulesWrapper } from 'styles/pages/regulamentos'
import Banner from 'components/Banner'
import { GetStaticProps } from 'next'
import { initializeApollo } from 'utils/apollo'
import { getTermos } from 'graphql/queryes/termos'

type RulesPageProps = {
  categorias: Array<{
    nome: string
  }>
  termos: string
}
const Regulamentos = ({ categorias = [], termos = '' }: RulesPageProps) => {
  return (
    <DefaultTemplate categorias={categorias}>
      <Banner
        title="TROCA & DEVOLUÇÃO"
        description="Satisfação garantida ou seu dinheiro de volta"
        img="/img/regulamentos/banner.png"
      />
      <PaddingWrapper>
        <HorizontalPaddingWrapper padding="xxxlarge">
          <RulesWrapper dangerouslySetInnerHTML={{ __html: termos }} />
        </HorizontalPaddingWrapper>
      </PaddingWrapper>
    </DefaultTemplate>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo()
  const response = await client.query({
    query: getTermos
  })

  const { categorias, termo } = response.data

  return {
    props: {
      categorias,
      termos: termo.texto
    },
    revalidate: 60
  }
}

export default Regulamentos
