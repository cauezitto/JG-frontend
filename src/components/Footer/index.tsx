import PaddingWrapper from 'components/PaddingWrapper'
import Heading from 'components/Heading'
import * as S from './styles'
import Input from 'components/Input'
import Button from 'components/Button'
import { HorizontalPaddingWrapper } from 'styles/pages/home'
import { FiPhone, FiMail, FiFacebook } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
// import CopyAndPayment from 'components/CopyAndPayment'
import Link from 'next/link'

export type FooterProps = {
  categorias: Array<{
    nome: string
  }>
}

const Footer = ({ categorias = [] }: FooterProps) => (
  <S.Wrapper>
    <PaddingWrapper>
      <Heading
        color="white100"
        lineBottom={false}
        textAlign="center"
        role="h2"
        fontWeight="semiBold"
        margin="0 0 50px 0"
      >
        RECEBA NOSSAS OFERTAS POR EMAIL
      </Heading>

      <S.MailForm>
        <Input />

        <Input />

        <Button fontSize="large" fontWeight="semiBold">
          Enviar
        </Button>
      </S.MailForm>

      <HorizontalPaddingWrapper padding="large">
        <S.NavsContainer>
          <S.Nav>
            <Heading
              role="h3"
              margin="0 0 30px 0"
              lineBottom={false}
              color="white100"
            >
              CATEGORIAS
            </Heading>

            {categorias.map((categoria, index) => (
              <Link key={index} href={`/loja?categorias=${categoria.nome}`}>
                <S.NavigationLink>{categoria.nome}</S.NavigationLink>
              </Link>
            ))}
          </S.Nav>

          <S.Nav>
            <Heading
              role="h3"
              lineBottom={false}
              color="white100"
              fontWeight="semiBold"
              margin="0 0 30px 0"
            >
              MINHA CONTA
            </Heading>

            <Link href="/cadastro">
              <S.NavigationLink>Criar conta</S.NavigationLink>
            </Link>

            <Link href="/dashboard/dados-pessoais">
              <S.NavigationLink>Minha conta</S.NavigationLink>
            </Link>

            <Link href="/dashboard/pedidos">
              <S.NavigationLink>Meus Pedidos</S.NavigationLink>
            </Link>
          </S.Nav>

          <S.Nav>
            <Heading
              role="h3"
              lineBottom={false}
              color="white100"
              fontWeight="semiBold"
              margin="0 0 30px 0"
            >
              INSTITUCIONAL
            </Heading>

            <Link href="/sobre">
              <S.NavigationLink>Sobre Nós</S.NavigationLink>
            </Link>

            <Link href="/contato">
              <S.NavigationLink>Contato</S.NavigationLink>
            </Link>

            <Link href="/regulamentos">
              <S.NavigationLink>Troca e Devolução</S.NavigationLink>
            </Link>
          </S.Nav>

          <S.Nav>
            <Heading
              role="h3"
              lineBottom={false}
              color="white100"
              fontWeight="semiBold"
              margin="0 0 30px 0"
            >
              FALE CONOSCO
            </Heading>

            <S.SocialMediaContainer>
              <div className="social-media">
                <S.NavigationLink href="https://www.facebook.com/jgemporiodamalha">
                  <FiFacebook size={20} />
                </S.NavigationLink>
              </div>

              <div className="social-media">
                <S.NavigationLink href="https://www.instagram.com/jeffersonegisele/">
                  <FaInstagram size={20} />
                </S.NavigationLink>
              </div>
            </S.SocialMediaContainer>

            <S.NavigationLink href="tel:982522620">
              {' '}
              <FiPhone /> &nbsp; 98252-2620
            </S.NavigationLink>

            <S.NavigationLink href="mailto:contato@jgemporiodamalha.com.br">
              {' '}
              <FiMail /> &nbsp; contato@jgemporiodamalha.com.br
            </S.NavigationLink>
          </S.Nav>
        </S.NavsContainer>
      </HorizontalPaddingWrapper>
    </PaddingWrapper>
    {/* <CopyAndPayment /> */}
  </S.Wrapper>
)

export default Footer
