import React from 'react'
import termos from 'mocks/termos'
import PaddingWrapper from 'components/PaddingWrapper'
import DefaultTemplate from 'templates/Default'
import { HorizontalPaddingWrapper } from 'styles/pages/home'
import { RulesWrapper } from 'styles/pages/regulamentos'
import Banner from 'components/Banner'
const Regulamentos = () => {
  return (
    <DefaultTemplate>
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

export default Regulamentos
