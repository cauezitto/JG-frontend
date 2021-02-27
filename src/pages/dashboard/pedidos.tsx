import Dashboard from 'templates/dashboard'
import Link from 'next/link'
import Container from 'styles/pages/dashboard/Pedidos'
import Heading from 'components/Heading'
import ShadowBox from 'components/ShadowBox'
import Paragraph from 'components/Paragraph'
import { HiOutlineArrowRight } from 'react-icons/hi'
import api from 'services/api'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'helpers'
import handlePrice from 'utils/handlePrice'
// import orders from 'mocks/orders.json'

type Orders = Array<{
  id: number
  status: string
  total: number
}>
type Props = {
  orders: Orders
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = parseCookies(req)
  let orders = [] as Orders
  let error = false

  if (!cookies.token) {
    console.log('redirecionado')
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  await api
    .get('/pedido', {
      headers: {
        Authorization: `Bearer ${cookies.token}`
      }
    })
    .then((response) => {
      const { data } = response
      orders = data
    })
    .catch((err) => {
      console.log(err)
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

  console.log(orders)
  return {
    props: { orders } as Props // will be passed to the page component as props
  }
}

const Pedidos = ({ orders }: Props) => {
  return (
    <Dashboard>
      <Container>
        <Heading
          color="brown"
          fontSize="xxmax"
          justify="center"
          fontWeight="semiBold"
          lineBottom={false}
          margin="0"
        >
          Meus Pedidos
        </Heading>

        <Paragraph
          margin="20px 0"
          textAlign="center"
          fontSize="extra"
          font="manjari"
        >
          Acesse seu pedidos logo abaixo
        </Paragraph>

        <div className="orders">
          {orders.map((order, index) => (
            <div className="order-wrapper" key={index}>
              <div
                className={`state ${
                  order.status === 'aprovado'
                    ? 'green'
                    : order.status === 'pendente'
                    ? 'yellow'
                    : 'red'
                }`}
              />
              <ShadowBox
                className="order"
                radius="large"
                height={120}
                paddingX="medium"
                paddingY="small"
              >
                <div className="cod">
                  <Paragraph
                    fontWeight="semiBold"
                    fontSize="large"
                    font="ubuntu"
                    color="black"
                  >
                    #{order.id}
                  </Paragraph>
                </div>
                <div
                  className={`status item color-${
                    order.status === 'aprovado'
                      ? 'green'
                      : order.status === 'pendente'
                      ? 'yellow'
                      : 'red'
                  }`}
                >
                  Status : {order.status}
                </div>
                <div className="price">
                  <Heading
                    margin="0"
                    color="black"
                    font="ubuntu"
                    fontSize="xlarge"
                    lineBottom={false}
                    textAlign="left"
                    role="h4"
                  >
                    {handlePrice.priceNumberToReadblePrice(order.total)}
                  </Heading>
                </div>
                <div className="link item">
                  <Link href={`/dashboard/pedido/${order.id}`} passHref>
                    <a>
                      <Paragraph
                        fontSize="large"
                        font="ubuntu"
                        fontWeight="semiBold"
                        color="black"
                      >
                        {'Conferir'} &nbsp; <HiOutlineArrowRight />
                      </Paragraph>
                    </a>
                  </Link>
                </div>
              </ShadowBox>
            </div>
          ))}
        </div>
      </Container>
    </Dashboard>
  )
}

export default Pedidos
