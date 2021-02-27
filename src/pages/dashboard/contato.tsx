import Heading from 'components/Heading'
import Input from 'components/Input'
import Label from 'components/Label'
import Paragraph from 'components/Paragraph'
import Dashboard from 'templates/dashboard'
import Container from 'styles/pages/dashboard/contato'
import Options from 'components/Options'
import Button from 'components/Button'
import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'helpers'
import api from 'services/api'
import jwt from 'jsonwebtoken'
import { useStateContext } from 'context'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = parseCookies(req)

  if (!cookies.token) {
    console.log('redirecionado')
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {} // will be passed to the page component as props
  }
}

const Contato = () => {
  const { token } = useStateContext()
  const [issue, setIssue] = useState('Motivo do chamado')
  const [message, setMessage] = useState(' ')

  const send = async () => {
    const decoded = await jwt.decode(token!)
    await api
      .post(
        '/chamados',
        {
          motivo:
            issue === 'Motivo do chamado' ? 'Motivo não selecionado' : issue,
          mensagem: message,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          user: (decoded as any).id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(() => {
        alert(
          'Recebemos o seu chamado, agora é só esperar que entramos em contato'
        )
        setMessage('')
        setIssue('Motivo do chamado')
      })
      .catch((err) => {
        alert(
          'Um erro inesperado ocorreu! Tente logar novamente. Caso o problema persista, tente novamente mais tarde ou entre em contato com nossa equipe via email ou whatsapp'
        )
        console.log(err)
      })
  }
  return (
    <Dashboard>
      <Container>
        <Heading
          color="brown"
          justify="center"
          fontSize="xxmax"
          fontWeight="semiBold"
          lineBottom={false}
        >
          Fale com nossa equipe
        </Heading>

        <Paragraph fontSize="xlarge" margin="10px 0 50px 0" textAlign="center">
          Mande sua mensagem para nós, e teremos prazer em te responder
        </Paragraph>

        <Options text={issue}>
          <div
            className="item"
            onClick={() => {
              setIssue('Me arrependi da compra')
            }}
          >
            Me arrependi da compra
          </div>
          <div
            className="item"
            onClick={() => {
              setIssue('Meu Produto não chegou')
            }}
          >
            Meu Produto não chegou
          </div>
          <div
            className="item"
            onClick={() => {
              setIssue('Meu produto veio com defeito')
            }}
          >
            Meu produto veio com defeito
          </div>
          <div
            className="item"
            onClick={() => {
              setIssue('Outro Motivo')
            }}
          >
            Outro motivo
          </div>
        </Options>

        <Label fontSize="xlarge" fontWeight="semiBold">
          Mensagem
          <Input
            textArea
            radius={20}
            height={250}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            borderColor="gray50"
          />
        </Label>
        <br />
        <Button fontSize="xlarge" fill="red100" onClick={send}>
          ENVIAR
        </Button>
      </Container>
    </Dashboard>
  )
}

export default Contato
