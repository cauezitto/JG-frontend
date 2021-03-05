import Banner from 'components/Banner'
import React from 'react'
import DefaultTemplate from 'templates/Default'
import PaddingWrapper from 'components/PaddingWrapper'
import Heading from 'components/Heading'
import ContactForm from 'components/ContactForm'
import {
  ContactDataWrapper,
  DataWrapper,
  SocialMedia,
  SocialMediaWrapper
} from 'styles/pages/contato'
import { HorizontalPaddingWrapper } from 'styles/pages/home'
import Link from 'components/Link'
import { FiPhone, FiMail, FiFacebook, FiInstagram } from 'react-icons/fi'
import { GetStaticProps } from 'next'
import { getCategorias } from 'graphql/queryes/categorias'
import { initializeApollo } from 'utils/apollo'

type AboutPageProps = {
  categorias: Array<{
    nome: string
  }>
}
const Sobre = ({ categorias = [] }: AboutPageProps) => {
  return (
    <DefaultTemplate categorias={categorias}>
      <Banner
        img="/img/contato/banner.png"
        title="FALE CONOSCO"
        description="Atendimento 24h por dia!"
      />
      <PaddingWrapper>
        <Heading role="h2" fontSize="extra" margin="50px 0">
          ESTAMOS AQUI PARA TE AJUDAR
        </Heading>

        <ContactForm />

        <HorizontalPaddingWrapper padding="xxxlarge">
          <ContactDataWrapper>
            <DataWrapper>
              <Link
                textDecoration="none"
                fontWeight="semiBold"
                href="tel:98252-2620"
                iconSize="extra"
              >
                <FiPhone /> &nbsp; &nbsp; &nbsp; &nbsp; (11) 98252-2620
              </Link>
              <br />
              <br />
              <Link
                textDecoration="none"
                fontWeight="semiBold"
                href="mailto:contato@jgemporiodamalha"
                iconSize="extra"
              >
                <FiMail /> &nbsp; &nbsp; &nbsp; &nbsp;
                contato@jgemporiodamalha.com.br
              </Link>
            </DataWrapper>
            <div className="divisor" />
            <DataWrapper>
              <Heading
                lineBottom={false}
                fontSize="large"
                role="h2"
                textAlign="center"
                justify="center"
                margin="0 0 10px 0"
              >
                NOSSAS REDES SOCIAIS
              </Heading>

              <SocialMediaWrapper>
                <SocialMedia
                  href="https://www.facebook.com/jgemporiodamalha"
                  target="_blank"
                >
                  <FiFacebook strokeWidth={2} />
                </SocialMedia>

                <SocialMedia
                  href="https://www.instagram.com/jeffersonegisele/"
                  target="_blank"
                >
                  <FiInstagram strokeWidth={2} />
                </SocialMedia>
              </SocialMediaWrapper>
            </DataWrapper>
          </ContactDataWrapper>
        </HorizontalPaddingWrapper>
      </PaddingWrapper>
    </DefaultTemplate>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo()
  const response = await client.query({
    query: getCategorias
  })

  const { categorias } = response.data

  return {
    props: {
      categorias
    },
    revalidate: 60
  }
}

export default Sobre
