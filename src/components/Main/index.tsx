import * as S from './styles'
import Button from 'components/Button'
import MobileMenu from 'components/MenuMobile'
import { useState } from 'react'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  const [show, setShow] = useState(false)
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />

      <Button
        fill="red100"
        onClick={() => {
          setShow(!show)
        }}
      >
        PAÇOCA
      </Button>

      <MobileMenu />
    </S.Wrapper>
  )
}

export default Main
