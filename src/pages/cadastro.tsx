import Heading from 'components/Heading'
import Container from 'styles/pages/Cadastro'
import Paragraph from 'components/Paragraph'
import Button from 'components/Button'
import Image from 'next/image'
import { FiFacebook } from 'react-icons/fi'
import { ImGooglePlus } from 'react-icons/im'
import Link from 'next/link'
import StyledLink from 'components/Link'
import Label from 'components/Label'
import Input from 'components/Input'
import { useState, useEffect } from 'react'
import api from 'services/api'
import { useStateContext } from 'context'
import { useRouter } from 'next/router'
import cep from 'cep-promise'

import { useCookies } from 'react-cookie'
import { cepMask } from 'utils/masks'
import { ProductProps } from 'types/ProductProps'

type AddressProps = {
  street: string
  city: string
  neighborhood: string
  state: string
}

const Cadastro = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [endereco, setEndereco] = useState('')
  const [street, setStreet] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [number, setNumber] = useState('')
  const [state, setState] = useState('')
  const [password, setPassword] = useState('')
  const { token, setToken, setUser } = useStateContext()
  const [cookie, setCookie] = useCookies(['user'])
  const [error, setError] = useState(false)
  const router = useRouter()

  const send = async () => {
    if (endereco.length < 8) {
      alert('cep incompleto')
      return
    }
    if (
      nome === '' ||
      email === '' ||
      password === '' ||
      phone === '' ||
      endereco === '' ||
      street === '' ||
      neighborhood === '' ||
      city === '' ||
      number === ''
    ) {
      alert('dados incompletos')
      return
    } else if (endereco.length < 8) {
      alert('cep incompleto')
      return
    } else if (error) {
      alert('cep invalido, por favor confira seus dados')
      return
    }
    await api
      .post('/user', {
        username: nome,
        email,
        password,
        fone: phone,
        endereco: {
          cep: endereco,
          rua: street,
          bairro: neighborhood,
          cidade: city,
          UF: state,
          numero: number
        }
      })
      .then((response) => {
        const { data } = response
        const { user } = data

        console.log(response.data)

        const userData = {
          username: user.username,
          email: user.email,
          phone: user.phone,
          endereco: user.endereco,
          photo: user.foto?.url,
          favorites: user.favoritos.produtos.map(
            (produto: ProductProps) => produto.id
          )
        }

        setToken(data.jwt)
        setUser(userData)

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
        router.push('/dashboard/pedidos')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const checkAddress = async () => {
    setError(true)
    await cep(endereco)
      .then((response: AddressProps) => {
        const { state, city, street, neighborhood } = response
        setState(state)
        setCity(city)
        setStreet(street)
        setNeighborhood(neighborhood)
        setError(false)
      })
      .catch(() => {
        //console.log(err)
        alert('cep invalido')
        setError(true)
      })
  }

  useEffect(() => {
    if (endereco.length === 8) {
      checkAddress()
    }
  }, [endereco])

  return (
    <Container>
      <div className="sub-container">
        <div className="go2login">
          <div className="content">
            <div
              className="logo-wrapper"
              onClick={() => {
                router.push('/')
              }}
            >
              <Image src="/img/logo.webp" height={40} width={140} />
            </div>
            <div className="text-wrapper">
              <Heading
                font="ubuntu"
                fontWeight="bold"
                fontSize="max"
                justify="center"
                lineBottom={false}
                role="h2"
              >
                Você por aqui! :)
              </Heading>
              <Paragraph
                fontWeight="semiBold"
                justify="center"
                textAlign="center"
                font="ubuntu"
                fontSize="large"
                margin="20px 0 30px 0"
              >
                Para se manter conectado conosco, <br /> por favor faça seu
                login
              </Paragraph>

              <Link href="/login" passHref>
                <a>
                  <Button
                    radius={50}
                    fontSize="large"
                    fontWeight="semiBold"
                    outline
                    color="black"
                  >
                    LOGIN
                  </Button>
                </a>
              </Link>
            </div>
            &nbsp;
          </div>
        </div>

        <div className="go2login-mobile-wrapper">
          <div className="go2login-mobile">
            Você por aqui! :) &nbsp;
            <StyledLink
              href="/login"
              color="white100"
              fontSize="xlarge"
              fontWeight="semiBold"
            >
              Login
            </StyledLink>
          </div>
        </div>

        <div className="register-wrapper">
          <div className="title">
            <Heading
              justify="center"
              color="white100"
              fontSize="max"
              margin="0"
              lineBottom={false}
            >
              Faça seu cadastro
            </Heading>
          </div>

          <div className="icons">
            <div className="icon-wrapper">
              <FiFacebook />
            </div>
            <div className="icon-wrapper">
              <ImGooglePlus />
            </div>
          </div>

          <div className="text">
            <Paragraph
              justify="center"
              textAlign="center"
              font="ubuntu"
              fontSize="xlarge"
            >
              ou use seu email para se registrar
            </Paragraph>
          </div>

          <div className="name">
            <Label color="white100" fontWeight="bold" fontSize="large">
              &nbsp; NOME
              <Input
                radius={50}
                height={45}
                value={nome}
                borderColor="white100"
                onChange={(e) => setNome(e.target.value)}
              />
            </Label>
          </div>

          <div className="email">
            <Label color="white100" fontWeight="bold" fontSize="large">
              &nbsp; EMAIL
              <Input
                radius={50}
                height={45}
                value={email}
                borderColor="white100"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Label>
          </div>

          <div className="phone">
            <Label color="white100" fontWeight="bold" fontSize="large">
              &nbsp; CELULAR
              <Input
                radius={50}
                height={45}
                borderColor="white100"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Label>
          </div>

          <div className="address">
            <Label color="white100" fontWeight="bold" fontSize="large">
              &nbsp; CEP
              <Input
                radius={50}
                height={45}
                borderColor="white100"
                value={endereco}
                onChange={(e) => setEndereco(cepMask(e.target.value))}
                maxLength={8}
              />
            </Label>
          </div>

          <div className="number">
            <Label color="white100" fontWeight="bold" fontSize="large">
              &nbsp; N°
              <Input
                radius={50}
                height={45}
                borderColor="white100"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                maxLength={8}
              />
            </Label>
          </div>

          {street !== '' && (
            <>
              <div className="street">
                <Label color="white100" fontWeight="bold" fontSize="large">
                  &nbsp; ENDEREÇO
                  <Input
                    radius={50}
                    height={45}
                    borderColor="white100"
                    value={`${street},  ${neighborhood},  ${city},  ${state}`}
                    readOnly
                    maxLength={8}
                  />
                </Label>
              </div>
            </>
          )}

          <div className="password">
            <Label color="white100" fontWeight="bold" fontSize="large">
              &nbsp; SENHA
              <Input
                radius={50}
                height={45}
                borderColor="white100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Label>
          </div>

          <div className="send">
            <Button radius={50} fill="red100" fontSize="xlarge" onClick={send}>
              ENVIAR
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Cadastro
