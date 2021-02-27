import Input from 'components/Input'
import Button from 'components/Button'

import * as S from 'styles/pages/Recuperar-senha'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import { FormEvent, useState } from 'react'
import Link from 'components/Link'
import api from 'services/api'
import PaddingWrapper from 'components/PaddingWrapper'

const PasswordReset = () => {
  const [email, setEmail] = useState('')
  const passwordReset = async (e: FormEvent) => {
    e.preventDefault()
    await api
      .post('/password', { email })
      .then(() => {
        alert('sua senha foi reiniciada! confira seu email!')
        setEmail('')
      })
      .catch(() => {
        alert(
          'não conseguimos resetar sua senha, confira se esse é mesmo o seu email'
        )
      })
  }
  return (
    <PaddingWrapper>
      <S.Container>
        <Heading
          lineBottom={false}
          margin="5px"
          textAlign="center"
          fontSize="extra"
        >
          Esqueceu sua senha ?
        </Heading>

        <Paragraph
          color="black"
          textAlign="center"
          fontSize="large"
          margin="0 0 20px 0"
        >
          Não tem problema, insira seu email para recuperar seu acesso!
        </Paragraph>

        <form onSubmit={passwordReset}>
          <Input
            placeholder="Seu E-mail"
            height={46}
            width={250}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          &nbsp;
          <Button fontSize="large">OK</Button>
        </form>
        <br />
        <Link
          font="ubuntu"
          href="/login"
          color="brown"
          fontWeight="semiBold"
          fontSize="large"
        >
          Voltar para tela de login
        </Link>
      </S.Container>
    </PaddingWrapper>
  )
}

export default PasswordReset
