import React from 'react'
import DefaultTeamplate from 'templates/Default'
import Banner from 'components/Banner'
import Heading from 'components/Heading'
import History from 'components/History'
import PaddingWrapper from 'components/PaddingWrapper'
import SkillCard from 'components/SkillCard'
// import { HorizontalPaddingWrapper } from 'styles/pages/home'
import {
  SkillCardsWrapper,
  VirtuesWrapper,
  Go2Contact
} from 'styles/pages/sobre'
import { HorizontalPaddingWrapper } from 'styles/pages/home'
import VirtueCard from 'components/VirtueCard'
import Button from 'components/Button'

const Sobre = () => {
  return (
    <DefaultTeamplate>
      <Banner
        img="/img/sobre/banner.png"
        title="SOBRE NÓS"
        description="Conheça nossa trajetória"
      />

      <Heading role="h2" margin="50px 0">
        DO CAMPO PARA A LOJA
      </Heading>

      <PaddingWrapper>
        <History />

        <HorizontalPaddingWrapper padding="xlarge">
          <SkillCardsWrapper>
            <SkillCard
              title="MISSÃO"
              text="Sempre jogando limpo com a torcida, levamos a magia do futebol a todos os amantes do esporte! Sejam eles de todas as classes e de todos os lugares!"
              icon="/img/sobre/target.png"
              image="/img/sobre/strategy.png"
            />
            &nbsp;
            <SkillCard
              title="VISÃO"
              text="Queremos que todos possam vibrar vestindo a camisa do time do coração. Juntos, vamos balançar o mercado e ser referência em qualidade e inclusão."
              icon="/img/sobre/binoculars.png"
              image="/img/sobre/goal.png"
            />
          </SkillCardsWrapper>
        </HorizontalPaddingWrapper>

        <HorizontalPaddingWrapper>
          <Heading lineBottom={false} role="h2" margin="0 0 30px 0">
            NOSSOS VALORES
          </Heading>

          <VirtuesWrapper>
            <VirtueCard
              fill="red100"
              title="COMPROMETIMENTO"
              text="Aqui o juiz da partida é sempre você! Queremos que sua experiência seja a melhor possível em nossa loja."
              color="white100"
            />

            <VirtueCard
              fill="green100"
              title="AGILIDADE"
              text="Entrega rápida! Entregamos sua compra no prazo de até 15 dias úteis, para você não ficar de escanteio"
              color="white100"
            />

            <VirtueCard
              fill="yellow200"
              title="RESPEITO"
              text="Sempre prezamos pelo respeito e bom atendimento. Aqui, caiu na área é penalti!"
              color="black"
            />
          </VirtuesWrapper>
        </HorizontalPaddingWrapper>
      </PaddingWrapper>

      <Go2Contact>
        <Heading
          role="h2"
          margin="0 0 20px 0"
          color="white100"
          lineBottom={false}
          fontSize="max"
        >
          Fale com nossa equipe
        </Heading>

        <Button fill="red100" radius={10} fontSize="large" fontWeight="bold">
          Falar conosco
        </Button>
      </Go2Contact>
    </DefaultTeamplate>
  )
}

export default Sobre
