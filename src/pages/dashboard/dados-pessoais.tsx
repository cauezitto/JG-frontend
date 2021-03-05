import Heading from 'components/Heading'
import Dashboard from 'templates/dashboard'
import Container, { Profile } from 'styles/pages/dashboard/Dados'
import Label from 'components/Label'
import Input from 'components/Input'
import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import UserProps from 'types/UserProps'
import Button from 'components/Button'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'helpers'
import { useStateContext } from 'context'
import api from 'services/api'
import { useCookies } from 'react-cookie'
import jwt from 'jsonwebtoken'
import cep from 'cep-promise'
import { cepMask } from 'utils/masks'

type AddressProps = {
  street: string
  city: string
  neighborhood: string
  state: string
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = parseCookies(req)
  let user = {}
  let error = false

  // console.log(cookies)
  if (!cookies.token) {
    // console.log('redirecionado')
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  await api
    .get('/user', {
      headers: {
        Authorization: `Bearer ${cookies.token}`
      }
    })
    .then((response) => {
      // console.log('sucesso na requisição')
      const { data } = response

      // console.log(data)
      user = {
        username: data.username,
        email: data.email,
        phone: data.fone,
        endereco: data.endereco.cep,
        rua: data.endereco.rua,
        bairro: data.endereco.bairro,
        cidade: data.endereco.cidade,
        estado: data.endereco.UF,
        numero: data.endereco.numero,
        photo: data.foto
          ? process.env.NEXT_PUBLIC_SERVER_HOST + data.foto.url
          : `data:image/png;base64,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`
      }
    })
    .catch((err) => {
      // console.log(err)
      error = true
    })

  if (error) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  // console.log(user)
  return {
    props: user // will be passed to the page component as props
  }
}

const DadosPessoais = (props: UserProps) => {
  const { user, setUser, token, server } = useStateContext()
  const [cookie, setCookie] = useCookies(['user'])
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [endereco, setEndereco] = useState('')
  const [street, setStreet] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [number, setNumber] = useState('')
  const [state, setState] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState<File>()
  const [previewImage, setPreviewImage] = useState<string>()
  const [error, setError] = useState(false)

  useEffect(() => {
    setUsername(props.username)
    setEmail(props.email)
    setPhone(props.phone)
    setEndereco(props.endereco)
    setStreet(props.rua!)
    setNeighborhood(props.bairro!)
    setCity(props.cidade!)
    setState(props.estado!)
    setNumber(props.numero!)
    setUser({
      username: props.username,
      email: props.email,
      phone: props.phone,
      endereco: props.endereco,
      photo: props.photo
    })
  }, [])

  const checkAddress = async () => {
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

  const handleSelectImage = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files)
    if (!event.target.files) {
      return
    }
    const selectedImage = event.target.files[0]
    setImage(selectedImage)
    setPreviewImage(URL.createObjectURL(selectedImage))
  }

  const send = async (e: FormEvent) => {
    e.preventDefault()
    if (endereco.length < 8) {
      alert('cep incompleto, por favor confira seus dados')
      return
    } else if (error) {
      alert('cep invalido, por favor confirme seus dados')
      return
    }
    const data = new FormData()
    const userData =
      password !== ''
        ? {
            username,
            email,
            fone: phone,
            endereco: {
              cep: endereco,
              rua: street,
              bairro: neighborhood,
              cidade: city,
              UF: state,
              numero: number
            },
            password
          }
        : {
            username,
            email,
            fone: phone,
            endereco: {
              cep: endereco,
              rua: street,
              bairro: neighborhood,
              cidade: city,
              UF: state,
              numero: number
            }
          }
    data.append('data', JSON.stringify(userData))
    if (image) {
      data.append('files.foto', image)
    }
    console.log(userData)
    const decoded = jwt.decode(token!)
    await api
      .put(`/user/${(decoded as any).id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        alert('Seus dados foram editados com sucesso!')
        const { data } = response

        const userData = {
          username: data.username,
          email: data.email,
          phone: data.phone,
          endereco: data.endereco,
          photo:
            data.image?.formats.thumbnail.url ||
            `data:image/png;base64,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`
        }
        setCookie('user', userData, {
          path: '/',
          maxAge: 604800, // Expires after 1hr
          sameSite: true
        })
        setUser(userData)
      })
      .catch((err) => {
        alert('Algo deu errado! se o erro persistir, tente mais tarde')
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
          margin="0"
          lineBottom={false}
        >
          Meus dados
        </Heading>

        <label style={{ cursor: 'pointer' }} htmlFor="image">
          <Profile url={previewImage ? previewImage : props.photo!}></Profile>
        </label>
        <input
          onChange={handleSelectImage}
          type="file"
          name=""
          id="image"
          style={{ display: 'none' }}
        />

        <form onSubmit={send}>
          <div className="data-wrapper">
            <div className="name">
              <Label
                color="black"
                fontSize="xlarge"
                font="ubuntu"
                fontWeight="semiBold"
              >
                &nbsp; NOME
                <Input
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                  height={50}
                  radius={50}
                  borderColor="gray50"
                />
              </Label>
            </div>

            <div className="email">
              <Label
                color="black"
                fontSize="xlarge"
                font="ubuntu"
                fontWeight="semiBold"
              >
                &nbsp; EMAIL
                <Input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  height={50}
                  radius={50}
                  borderColor="gray50"
                />
              </Label>
            </div>

            <div className="phone">
              <Label
                color="black"
                fontSize="xlarge"
                font="ubuntu"
                fontWeight="semiBold"
              >
                &nbsp; CELULAR
                <Input
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                  }}
                  height={50}
                  radius={50}
                  borderColor="gray50"
                />
              </Label>
            </div>

            <div className="address">
              <Label
                color="black"
                fontSize="xlarge"
                font="ubuntu"
                fontWeight="semiBold"
              >
                &nbsp; CEP
                <Input
                  value={endereco}
                  onChange={(e) => {
                    setEndereco(cepMask(e.target.value))
                  }}
                  height={50}
                  radius={50}
                  borderColor="gray50"
                  maxLength={8}
                />
              </Label>
            </div>

            <div className="number">
              <Label
                color="black"
                fontSize="xlarge"
                font="ubuntu"
                fontWeight="semiBold"
              >
                &nbsp; Nº
                <Input
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  height={50}
                  radius={50}
                  borderColor="gray50"
                />
              </Label>
            </div>

            <div className="street">
              <Label
                color="black"
                fontSize="xlarge"
                font="ubuntu"
                fontWeight="semiBold"
              >
                &nbsp; ENDEREÇO
                <Input
                  value={`${street},  ${neighborhood},  ${city},  ${state}`}
                  readOnly
                  height={50}
                  radius={50}
                  borderColor="gray50"
                />
              </Label>
            </div>

            <div className="password">
              <Label
                color="black"
                fontSize="xlarge"
                font="ubuntu"
                fontWeight="semiBold"
              >
                &nbsp;MUDAR SENHA
                <Input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  height={50}
                  radius={50}
                  borderColor="gray50"
                />
              </Label>
            </div>
          </div>

          <Button fontWeight="semiBold" fill="red100" fontSize="xlarge">
            ATUALIZAR DADOS
          </Button>
        </form>
      </Container>
    </Dashboard>
  )
}

export default DadosPessoais
