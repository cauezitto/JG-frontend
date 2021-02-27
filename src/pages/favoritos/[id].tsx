import Heading from 'components/Heading'
import Input from 'components/Input'
import Favoritos from 'styles/pages/Favoritos'
import { FiCopy } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { GetServerSideProps } from 'next'
import { GoPlus } from 'react-icons/go'
import { parseCookies } from 'helpers'
import jwt from 'jsonwebtoken'
import api from 'services/api'
import { ProductProps } from 'types/ProductProps'
import UnathorizedPopUp from 'components/UnathorizedPopUp'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PendingPermissionPopUp from 'components/PendingPermissionPopUp'
import UserProps from 'types/UserProps'
import { FiChevronRight } from 'react-icons/fi'
import FriendsList from 'components/FriendsList'
import ProductCard from 'components/ProductCard'
import GridWrapper from 'components/GridWrapper'
import PaddingWrapper from 'components/PaddingWrapper'
import DefaultTemplate from 'templates/Default'
import { HorizontalPaddingWrapper } from 'styles/pages/home'
import { useStateContext } from 'context'

type Props = {
  products: ProductProps[]
  id?: number
  amigos?: {
    pendentes: UserProps[]
    autorizados: UserProps[]
  }
  err: {
    login: boolean
    unauthorized: boolean
  }
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params = { id: 1 }
}) => {
  const cookies = parseCookies(req)
  let favoriteList
  let friends = null
  // eslint-disable-next-line prefer-const
  let err = false

  if (!cookies.token) {
    return {
      props: {
        products: [],
        err: {
          login: true,
          unauthorzed: false
        }
      }
    }
  }

  const decoded = await jwt.decode(cookies.token)

  if (!decoded) {
    return {
      props: {
        products: [],
        err: {
          login: false,
          unauthorized: true
        }
      }
    }
  }

  await api
    .get(`/favoritos/${params.id}`, {
      headers: {
        Authorization: `Bearer ${cookies.token}`
      }
    })
    .then((response) => {
      console.log('requisição feita com sucesso')
      favoriteList = response.data.produtos
      console.log(typeof params.id, (decoded as any).id)
      if ((decoded as any).id == params.id) {
        friends = response.data.amigos
      }
    })
    .catch((error) => {
      console.log(error)
      console.log('erro na requisição')
      err = true
    })

  if (err) {
    return {
      props: {
        products: [],
        err: {
          login: false,
          unauthorized: true
        }
      }
    }
  }
  return {
    props: {
      products: favoriteList ? favoriteList : [],
      amigos: friends,
      id: params.id,
      err: {
        login: false,
        unauthorized: err ? true : false
      }
    }
  }
}

const Favorites = ({ products, err, amigos, id }: Props) => {
  const router = useRouter()
  const [showList, setShowList] = useState(false)
  const { server } = useStateContext()
  const copy = () => {
    const input = document.querySelector('.link-input') as HTMLInputElement
    console.log(input)
    input.select()
    document.execCommand('copy')
    alert('link copiado!')
  }

  const copyMobile = () => {
    const input = document.querySelector(
      '.link-input-mobile'
    ) as HTMLInputElement
    console.log(input)
    input.select()
    document.execCommand('copy')
    alert('link copiado!')
  }

  useEffect(() => {
    console.log(err)
  }, [])

  if (err.login)
    return (
      <UnathorizedPopUp
        onClose={() => {
          router.push('/')
        }}
        onRedirect={() => {
          router.push('/login')
        }}
        show={true}
      />
    )

  if (err.unauthorized) {
    return (
      <PendingPermissionPopUp
        onClose={() => {
          router.push('/')
        }}
        show={true}
      />
    )
  }

  return (
    <DefaultTemplate>
      <Favoritos>
        {amigos && (
          <div
            className="drop-list"
            onClick={() => {
              setShowList(true)
            }}
          >
            <FiChevronRight />
          </div>
        )}

        <div className={showList ? 'list-container' : 'list-container hidden'}>
          <FriendsList
            amigos={amigos}
            onClose={() => {
              setShowList(false)
            }}
          />
        </div>
        {products[0] ? (
          <>
            <HorizontalPaddingWrapper>
              <Heading>Favoritos</Heading>
            </HorizontalPaddingWrapper>
            <PaddingWrapper>
              <GridWrapper>
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.nome}
                    price={product.preco}
                    image={server + product.cover.url}
                    slug={product.slug}
                  />
                ))}
              </GridWrapper>

              {amigos && (
                <div className="share-wrapper">
                  <Heading
                    role="h3"
                    lineBottom={false}
                    color="black"
                    justify="center"
                  >
                    {' '}
                    Envie o link para seus amigos
                  </Heading>

                  <div className="space-between center">
                    <Input
                      className="link-input desktop"
                      value={`https://jgemporiodamalha.com.br/favoritos/${id}`}
                      borderColor="brown"
                      width={570}
                      readOnly
                    />

                    <Input
                      className="mobile link-input-mobile"
                      value={`https://jgemporiodamalha.com.br/favoritos/${id}`}
                      borderColor="brown"
                      width={300}
                      textArea
                      readOnly
                    />
                    <FiCopy className="copy desktop" onClick={copy} />
                    <FiCopy className="copy mobile" onClick={copyMobile} />
                  </div>

                  <div className="options">
                    <a href="#">
                      <div className="option facebook">
                        <FaFacebookF /> &nbsp; Facebook
                      </div>
                    </a>

                    <a href="#">
                      <div className="option twitter">
                        <FaTwitter /> &nbsp; Twitter
                      </div>
                    </a>

                    <a href="#">
                      <div className="option whatsapp">
                        <FaWhatsapp /> &nbsp; Whatsapp
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </PaddingWrapper>
          </>
        ) : (
          <Heading
            lineBottom={false}
            justify="center"
            margin="200px 0"
            textAlign="center"
          >
            Parece que você ainda não tem nada em sua lista
          </Heading>
        )}
      </Favoritos>
    </DefaultTemplate>
  )
}

export default Favorites
