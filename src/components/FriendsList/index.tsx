import * as S from './styles'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import { CgCloseR } from 'react-icons/cg'
import UserProps from 'types/UserProps'
import { FiXCircle, FiCheckCircle } from 'react-icons/fi'
import { FcCancel } from 'react-icons/fc'
import { useEffect, useState } from 'react'
import api from 'services/api'
import { useCookies } from 'react-cookie'

export type Props = {
  onClose?: VoidFunction
  onSave?: VoidFunction
  amigos?: {
    pendentes: UserProps[]
    autorizados: UserProps[]
  }
}

const FriendsList = (props: Props) => {
  const [cookie, setCookie] = useCookies(['user'])
  const {
    amigos = {
      autorizados: [],
      pendentes: []
    }
  } = props
  const [pendentes, setPendentes] = useState<UserProps[]>(
    amigos ? amigos.pendentes : []
  )
  const [autorizados, setAutorizados] = useState<UserProps[]>(
    amigos ? amigos.autorizados : []
  )

  const add = (amigo: UserProps) => {
    setPendentes(pendentes.filter((user) => user.id !== amigo.id))
    setAutorizados([...autorizados, amigo])
  }

  const erase = (amigo: UserProps) => {
    setPendentes(pendentes.filter((user) => user.id !== amigo.id))
    setAutorizados(autorizados.filter((user) => user.id !== amigo.id))
  }

  const save = async () => {
    const data = {
      amigos: {
        autorizados,
        pendentes
      }
    }
    await api
      .put('/favoritos', data, {
        headers: {
          Authorization: `Bearer ${cookie.token}`
        }
      })
      .then(() => {
        if (props.onClose) {
          props.onClose()
        }
      })
  }
  return (
    <S.Wrapper>
      <div className="close" onClick={props.onClose}>
        <CgCloseR />
      </div>
      <Heading
        font="ubuntu"
        fontWeight="semiBold"
        fontSize="xlarge"
        textAlign="center"
        justify="center"
        color="black"
        role="h3"
        lineBottom={false}
      >
        Acessos a sua lista de favoritos
      </Heading>
      {pendentes[0] && (
        <S.List>
          <Heading
            color="red100"
            fontWeight="semiBold"
            fontSize="xlarge"
            font="ubuntu"
            margin="10px 0"
            lineBottom={false}
            role="h4"
          >
            Pendentes
          </Heading>

          {pendentes.map((amigo) => (
            <S.Item key={amigo.email}>
              <S.Photo photo={amigo.photo} />

              <div className="nome">
                <Paragraph
                  color="black"
                  fontSize="large"
                  font="ubuntu"
                  fontWeight="semiBold"
                >
                  {amigo.username.split(' ')[0]}
                </Paragraph>
              </div>

              <div className="actions">
                <FiXCircle
                  color="red"
                  size={20}
                  onClick={() => {
                    erase(amigo)
                  }}
                />
                <FiCheckCircle
                  color="green"
                  size={20}
                  onClick={() => {
                    add(amigo)
                  }}
                />
              </div>
            </S.Item>
          ))}
        </S.List>
      )}

      {autorizados[0] && (
        <S.List>
          <Heading
            color="brown"
            fontWeight="semiBold"
            fontSize="xlarge"
            font="ubuntu"
            lineBottom={false}
            role="h3"
          >
            Acesso confirmado
          </Heading>

          {autorizados.map((amigo) => (
            <S.Item key={amigo.email}>
              <S.Photo photo={amigo.photo} />

              <div className="nome">
                <Paragraph
                  color="black"
                  fontSize="large"
                  font="ubuntu"
                  fontWeight="semiBold"
                >
                  {amigo.username.split(' ')[0]}
                </Paragraph>
              </div>

              <div className="actions">
                <FcCancel
                  color="red"
                  size={20}
                  onClick={() => {
                    erase(amigo)
                  }}
                />
              </div>
            </S.Item>
          ))}
        </S.List>
      )}

      <div className="options">
        <Button onClick={props.onClose} fontSize="large" fill="gray300">
          Fechar
        </Button>

        <Button onClick={save} fontSize="large" fill="red100">
          Salvar
        </Button>
      </div>
    </S.Wrapper>
  )
}

export default FriendsList
