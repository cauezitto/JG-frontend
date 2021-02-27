import Button from 'components/Button'
import Heading from 'components/Heading'
import Input from 'components/Input'
import Label from 'components/Label'
import Link from 'components/Link'
import Image from 'next/image'
import Container from 'styles/pages/Login'
import { FormEvent, useState } from 'react'
import api from 'services/api'
import { useStateContext } from 'context'
import { useRouter } from 'next/router'

import { useCookies } from 'react-cookie'

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [remenber, setRemenber] = useState(false)
  const { token, setToken, setUser } = useStateContext()
  const [cookie, setCookie] = useCookies(['user'])
  const router = useRouter()

  const send = async (e: FormEvent) => {
    e.preventDefault()
    await api
      .post('/auth/local', {
        identifier: login,
        password
      })
      .then((response) => {
        console.log(response.data)
        const { data } = response
        const { user } = data

        const userData = {
          username: user.username,
          email: user.email,
          phone: user.phone,
          endereco: user.endereco,
          foto: user.foto?.url
        }

        setToken(data.jwt)
        setUser(userData)
        if (remenber) {
          setCookie('token', data.jwt, {
            path: '/',
            maxAge: 604800, // Expires after 1hr
            sameSite: true
          })
          setCookie('user', userData, {
            path: '/',
            maxAge: 604800, // Expires after 1hr
            sameSite: true
          })
        } else {
          setCookie('token', data.jwt, {
            path: '/',
            sameSite: true,
            maxAge: 86400
          })
          setCookie('user', userData, {
            path: '/',
            sameSite: true,
            maxAge: 86400
          })
        }
        router.push('/dashboard/pedidos')
      })
      .catch((err) => {
        console.log(err)
        alert('confira seus dados e tente novamente')
      })
  }

  const changeRemenber = () => {
    setRemenber(!remenber)
  }
  return (
    <Container>
      <div className="sub-wrapper">
        <div className="subscribe-wrapper">
          <div
            className="logo"
            // onClick={() => {
            //   router.push('/')
            // }}
          >
            {/* <Image src="/img/logo3.png" height={40} width={140} /> */}
          </div>
          <div className="people">
            <img src="/img/login/player.svg" />
          </div>
          <div className="subscribe">
            <Heading
              margin="50px 0 0 0"
              color="black"
              font="ubuntu"
              fontWeight="normal"
              fontSize="xxxmax"
              textAlign="right"
              lineBottom={false}
              role="h2"
            >
              Novo aqui?
            </Heading>

            <Link
              href="/cadastro"
              fontWeight="semiBold"
              color="brown"
              font="ubuntu"
              fontSize="xxmax"
              textAlign="right"
              justify="flex-end"
            >
              Faça seu cadastro
            </Link>
          </div>
        </div>

        <div className="form-wrapper">
          <img src="/img/logo3.png" alt="JG" className="logo" />
          <Heading
            color="white100"
            font="ubuntu"
            justify="center"
            fontWeight="bold"
            lineBottom={false}
            fontSize="extra"
            margin="50px 0"
          >
            BEM - VINDO!
          </Heading>

          <form onSubmit={send}>
            <div className="login">
              <Label
                color="white100"
                font="ubuntu"
                fontWeight="semiBold"
                fontSize="large"
              >
                &nbsp; LOGIN
                <Input
                  margin="10px 0"
                  radius={50}
                  height={50}
                  borderColor="white100"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
              </Label>
            </div>

            <div className="password">
              <Label
                color="white100"
                font="ubuntu"
                fontWeight="semiBold"
                fontSize="large"
              >
                &nbsp; SENHA
                <Input
                  margin="10px 0"
                  radius={50}
                  height={50}
                  borderColor="white100"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Label>
            </div>

            <div className="remenber">
              <input
                type="checkbox"
                name="remenber"
                id="remenber-check-box"
                onChange={changeRemenber}
              />
              &nbsp; &nbsp; lembrar
            </div>

            <div className="forgeted">
              <Link
                href="/recuperar-senha"
                color="white100"
                font="ubuntu"
                fontSize="small"
              >
                Esqueci minha senha
              </Link>
            </div>

            <div className="send">
              <Button
                radius={50}
                fontSize="xlarge"
                fontWeight="semiBold"
                fill="yellow300"
                color="black"
              >
                ENVIAR
              </Button>
            </div>
          </form>
        </div>

        <div className="subscribe-mobile">
          Novo aqui?
          <Link
            href="/cadastro"
            color="brown"
            fontSize="xlarge"
            fontWeight="semiBold"
          >
            &nbsp; Se inscreva!
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Login
