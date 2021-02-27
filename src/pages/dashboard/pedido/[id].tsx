import Dashboard from 'templates/dashboard'
import Link from 'next/link'
import ExternalLink from 'components/Link'
import Container from 'styles/pages/dashboard/pedido'
import Heading from 'components/Heading'
import ShadowBox from 'components/ShadowBox'
import Paragraph from 'components/Paragraph'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'helpers'
import api from 'services/api'
import handlePrice from 'utils/handlePrice'
// import orders from 'mocks/orders.json'

type Order = {
  id: number
  status: string
  endereco: {
    rua: string
    bairro: string
    cidade: string
    UF: string
    numero: string
  }
  created_at: string
  link: string
  recebimento?: string
  dados_de_envio: {
    rastreio: string
  }
  total: number
}

type Props = {
  order: Order
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params = { id: 1 }
}) => {
  const cookies = parseCookies(req)
  let order = {} as Order
  let error = false

  JSON.stringify(cookies)
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
    .get(`/pedido/${params.id}`, {
      headers: {
        Authorization: `Bearer ${cookies.token}`
      }
    })
    .then((response) => {
      const { data } = response
      order = data
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

  console.log(order)
  return {
    props: { order } as Props // will be passed to the page component as props
  }
}

const Order = ({ order }: Props) => {
  // const order = orders[0]
  const date = new Date(order.created_at)
  let recebimento

  if (order.recebimento) {
    recebimento = new Date(order.recebimento)
  }

  return (
    <Dashboard paddingSmall>
      <Container>
        <div className="table desktop">
          <ShadowBox
            className="table-head"
            radius="medium"
            paddingX="small"
            paddingY="small"
          >
            <Paragraph
              font="ubuntu"
              fontSize="large"
              color="black"
              fontWeight="semiBold"
            >
              PEDIDO
            </Paragraph>

            <Paragraph
              font="ubuntu"
              fontSize="large"
              color="black"
              fontWeight="semiBold"
            >
              DATA
            </Paragraph>

            <Paragraph
              font="ubuntu"
              fontSize="large"
              color="black"
              fontWeight="semiBold"
            >
              STATUS
            </Paragraph>

            <Paragraph
              font="ubuntu"
              fontSize="large"
              color="black"
              fontWeight="semiBold"
            >
              VALOR
            </Paragraph>

            <Paragraph
              font="ubuntu"
              fontSize="large"
              color="black"
              fontWeight="semiBold"
            >
              A RECEBER
            </Paragraph>
          </ShadowBox>

          <ShadowBox className="t-body" paddingX="small" paddingY="medium">
            <div className="t-row">
              <Paragraph
                font="ubuntu"
                fontSize="medium"
                color="black"
                fontWeight="semiBold"
              >
                #{order.id}
              </Paragraph>

              <Paragraph
                font="ubuntu"
                fontSize="medium"
                color="black"
                fontWeight="semiBold"
              >
                {date.getDate() +
                  '/' +
                  (date.getMonth() + 1) +
                  '/' +
                  date.getFullYear()}
              </Paragraph>

              <div
                className={`item color-${
                  order.status === 'aprovado'
                    ? 'green'
                    : order.status === 'pendente'
                    ? 'yellow'
                    : 'red'
                }`}
              >
                Pagamento <br /> {order.status}
              </div>

              <Paragraph
                font="ubuntu"
                fontSize="large"
                color="black"
                fontWeight="semiBold"
              >
                {handlePrice.priceNumberToReadblePrice(order.total)}
              </Paragraph>

              <Paragraph
                font="ubuntu"
                fontSize="medium"
                color="black"
                fontWeight="semiBold"
              >
                {order.status === 'aprovado'
                  ? recebimento &&
                    recebimento.getDate() +
                      '/' +
                      (recebimento.getMonth() + 1) +
                      '/' +
                      recebimento.getFullYear()
                  : '...'}
              </Paragraph>
            </div>
          </ShadowBox>
        </div>

        <div className="table table-mobile">
          <ShadowBox
            paddingX="small"
            paddingY="small"
            radius="large"
            className="grid"
          >
            <div className="item">
              <Heading
                font="ubuntu"
                fontSize="large"
                color="black"
                fontWeight="semiBold"
                lineBottom={false}
              >
                PEDIDO
              </Heading>

              <Paragraph
                font="ubuntu"
                fontSize="medium"
                color="black"
                fontWeight="semiBold"
              >
                #{order.id}
              </Paragraph>
            </div>

            <div className="item">
              <Heading
                font="ubuntu"
                fontSize="large"
                color="black"
                fontWeight="semiBold"
                lineBottom={false}
              >
                DATA
              </Heading>

              <Paragraph
                font="ubuntu"
                fontSize="medium"
                color="black"
                fontWeight="semiBold"
              >
                {date.getDate() +
                  '/' +
                  (date.getMonth() + 1) +
                  '/' +
                  date.getFullYear()}
              </Paragraph>
            </div>

            <div className="item">
              <Heading
                font="ubuntu"
                fontSize="large"
                color="black"
                fontWeight="semiBold"
                lineBottom={false}
              >
                STATUS
              </Heading>

              <div
                className={`item color-${
                  order.status === 'aprovado'
                    ? 'green'
                    : order.status === 'pendente'
                    ? 'yellow'
                    : 'red'
                }`}
              >
                Pagamento <br /> {order.status}
              </div>
            </div>

            <div className="item">
              <Heading
                font="ubuntu"
                fontSize="large"
                color="black"
                fontWeight="semiBold"
                lineBottom={false}
              >
                VALOR
              </Heading>

              <Paragraph
                font="ubuntu"
                fontSize="medium"
                color="black"
                fontWeight="semiBold"
              >
                {handlePrice.priceNumberToReadblePrice(order.total)}
              </Paragraph>
            </div>

            <div></div>

            <div className="item">
              <Heading
                font="ubuntu"
                fontSize="large"
                color="black"
                fontWeight="semiBold"
                lineBottom={false}
              >
                A RECEBER
              </Heading>

              <Paragraph
                font="ubuntu"
                fontSize="medium"
                color="black"
                fontWeight="semiBold"
              >
                {order.status === 'aprovado'
                  ? recebimento &&
                    recebimento.getDate() +
                      '/' +
                      (recebimento.getMonth() + 1) +
                      '/' +
                      recebimento.getFullYear()
                  : '...'}
              </Paragraph>
            </div>
          </ShadowBox>
        </div>

        <div className="shipping">
          <ShadowBox paddingX="small" paddingY="small" radius="large">
            <Heading
              margin="0 0 20px 0"
              justify="center"
              color="black"
              font="ubuntu"
              fontSize="xxlarge"
              fontWeight="semiBold"
              lineBottom={false}
              role="h2"
            >
              {order.status === 'aprovado'
                ? 'Dados do correio'
                : 'Link de pagamento'}
            </Heading>

            <Paragraph
              justify="center"
              color="black"
              font="ubuntu"
              textAlign="center"
              fontSize="xlarge"
            >
              {order.status === 'aprovado' ? (
                `Código de rastreio: ${order.dados_de_envio.rastreio}`
              ) : (
                <ExternalLink
                  textAlign="center"
                  color="black"
                  href={order.link}
                >
                  {order.link}
                </ExternalLink>
              )}
            </Paragraph>
          </ShadowBox>
        </div>

        <div className="address">
          <ShadowBox
            paddingX="small"
            paddingY="small"
            radius="large"
            height={300}
          >
            <Heading
              margin="0 0 20px 0"
              justify="center"
              color="black"
              font="ubuntu"
              fontSize="xxlarge"
              fontWeight="semiBold"
              role="h2"
              lineBottom={false}
            >
              Endereço da entrega
            </Heading>

            <Paragraph
              justify="center"
              color="black"
              font="ubuntu"
              textAlign="center"
              fontSize="large"
              fontWeight="semiBold"
            >
              {`${order.endereco.rua} ${order.endereco.numero}, ${order.endereco.bairro}, ${order.endereco.cidade}, ${order.endereco.UF}`}
            </Paragraph>
          </ShadowBox>
        </div>

        <div className="back2orders desktop">
          <Link href="/dashboard/pedidos" passHref>
            <a>
              <MdKeyboardArrowLeft size={50} />
              Voltar à tela <br /> anterior
            </a>
          </Link>
        </div>
      </Container>
    </Dashboard>
  )
}

export default Order
