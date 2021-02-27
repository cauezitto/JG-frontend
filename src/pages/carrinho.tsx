import PaddingWrapper from 'components/PaddingWrapper'
import { HorizontalPaddingWrapper } from 'styles/pages/home'
import DefaultTemplate from 'templates/Default'
import Heading from 'components/Heading'
import ShadowBox from 'components/ShadowBox'
import * as Styles from 'styles/pages/carrinho'
// import products from 'mocks/products.json'
import { useStateContext } from 'context'
import QuantController from 'components/QuantController'
import priceHandler from 'utils/handlePrice'
import { FiHeart } from 'react-icons/fi'
import { CgCloseR } from 'react-icons/cg'
import GridWrapper from 'components/GridWrapper'
import ProductCard from 'components/ProductCard'
import Button from 'components/Button'
import Input from 'components/Input'
import { cepMask } from 'utils/masks'
import Link from 'components/Link'
import { useState, useEffect } from 'react'
import api from 'services/api'
import { initializeApollo } from 'utils/apollo'
import { getTierProducts } from 'graphql/queryes/produtos'
import { GetStaticProps } from 'next'
import { ProductProps } from 'types/ProductProps'
import Paragraph from 'components/Paragraph'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

type Props = {
  tier: ProductProps[]
}

const Carrinho = ({ tier }: Props) => {
  const { server, cart, setCart } = useStateContext()
  const { products, total } = cart
  const [cep, setCep] = useState('')
  const [shippingPrice, setShippingPrice] = useState(0)
  const [cashBack, setCashBack] = useState(0)
  const [cashBackPercent, setCashBackPercent] = useState(0)
  const [cupom, setCupom] = useState('')
  const [cookie, setCookie] = useCookies(['user'])
  const router = useRouter()

  const cupomCheck = async () => {
    alert(cupom)
    await api
      .get(`/cupom/${cupom}`)
      .then((response) => {
        const { desconto } = response.data
        setCashBackPercent(desconto)
      })
      .catch((err) => {
        console.log(err)
        alert('Cumpom inválido')
      })
  }

  const handleAddQuant = (position: number) => {
    const products = cart.products
    let total = 0

    // console.log(products[position].quant)
    products[position].quant = products[position].quant + 1

    products.map((product) => {
      total = total + product.preco * product.quant
    })

    setCart({
      products,
      total: total
    })
  }
  const handleSubQuant = (position: number) => {
    const products = cart.products

    let total = 0

    if (products[position].quant === 1) {
      return
    }

    products[position].quant = products[position].quant - 1

    products.map((product) => {
      total = total + product.preco * product.quant
    })

    setCart({
      products,
      total: total
    })
  }
  const shippingCalculate = async () => {
    if (cep.length < 8) {
      alert('cep incompleto')
      return
    }
    await api
      .post('/shipping/calculate', {
        cep,
        products: products.map((product) => ({
          id: product.id,
          quant: product.quant
        }))
      })
      .then((response) => {
        const { data } = response

        const sedexShipping = data.find(
          (option: any) => option.name === 'SEDEX'
        )
        setShippingPrice(Number(sedexShipping.price) / 2)
      })
      .catch((err) => {
        alert('algo deu errado, por favor tente novamente')
        console.log(err)
      })
  }

  const handleDelete = (position: number) => {
    let total = 0.0

    const products = cart.products.filter(
      (product) => product !== cart.products[position]
    )

    products.map((product) => {
      total = total + product.preco * product.quant
    })

    setCart({
      products,
      total: total
    })
  }

  const cashBackCalculate = () => {
    const discount = (total / 100) * cashBackPercent

    setCashBack(discount)
  }

  useEffect(() => {
    cashBackCalculate()
  }, [cashBackPercent, total])

  // useEffect(() => {
  //   setCart({
  //     products: [],
  //     total: 0
  //   })
  // }, [])
  if (!products[0]) {
    return (
      <DefaultTemplate>
        <PaddingWrapper>
          <HorizontalPaddingWrapper>
            <Heading>Seu carrinho está vazio!</Heading>

            <HorizontalPaddingWrapper>
              <Paragraph textAlign="center">
                Parece que você não tem nada em seu carrinho, aqui estão algumas
                sujestões
              </Paragraph>
            </HorizontalPaddingWrapper>

            <HorizontalPaddingWrapper>
              <GridWrapper>
                {tier.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.nome}
                    image={server + product.cover.url}
                    price={product.preco}
                    slug={product.slug}
                  />
                ))}
              </GridWrapper>
            </HorizontalPaddingWrapper>
          </HorizontalPaddingWrapper>
        </PaddingWrapper>
      </DefaultTemplate>
    )
  }

  const buy = async () => {
    if (!cookie.token) {
      router.push('/login')
      return
    }

    if (shippingPrice === 0) {
      alert('por favor, insira seu cep e calcule seu frete')
      return
    }

    const order = await api
      .post(
        '/pedido',
        { cep, cupom, products: cart.products },
        {
          headers: {
            Authorization: `Bearer ${cookie.token}`
          }
        }
      )
      .then((order) => {
        setCart({
          products: [],
          total: 0
        })
        router.push(order.data.url)
      })
      .catch((err) => {
        alert('algo deu errado, por favor tente novamente')
      })
  }

  return (
    <DefaultTemplate>
      <PaddingWrapper>
        <HorizontalPaddingWrapper>
          <Heading margin="0 0 30px 0">MEU CARRINHO</Heading>

          <br />
          <Styles.Main>
            <br />
            <Styles.ShippingWrapper>
              <div className="header">
                <h3 className="title">PRODUTO</h3>
                <h3 className="title">QUANTIDADE</h3>
                <h3 className="title">PREÇO UNITARIO</h3>
              </div>
              <br />
              {products.map((product, index) => (
                <ShadowBox key={index} className="shipping-box">
                  <div className="cell">
                    <div className="flex variable">
                      <Styles.ProductImage image={server + product.cover.url} />
                      <Styles.ProductData>
                        <Styles.ProductName>
                          {product.nome.toUpperCase()}
                        </Styles.ProductName>

                        <Styles.ProductReference>
                          <b>referência:</b> {product.slug}
                        </Styles.ProductReference>

                        {product.custom.isCustom && (
                          <>
                            <Styles.CustomName>
                              <b>Nome:</b> {product.custom.name}
                            </Styles.CustomName>

                            <Styles.CustomNumber>
                              <b>Número:</b> {product.custom.number}
                            </Styles.CustomNumber>
                          </>
                        )}

                        <Styles.CustomNumber>
                          <b>Tamanho:</b> {product.size}
                        </Styles.CustomNumber>

                        <Styles.Favorite>
                          <FiHeart />
                        </Styles.Favorite>
                      </Styles.ProductData>
                    </div>
                  </div>
                  <div className="cell">
                    <div className="flex align-center">
                      <QuantController
                        handleAdd={() => {
                          handleAddQuant(index)
                        }}
                        handleSub={() => {
                          handleSubQuant(index)
                        }}
                        quant={product.quant}
                      />
                    </div>
                  </div>
                  <div className="cell">
                    <div className="flex align-center">
                      <Styles.ProductPrice>
                        {priceHandler.priceNumberToReadblePrice(product.preco)}
                      </Styles.ProductPrice>
                      &nbsp; &nbsp;
                      <CgCloseR
                        onClick={() => {
                          handleDelete(index)
                        }}
                        color="red"
                        size={20}
                      />
                    </div>
                  </div>
                </ShadowBox>
              ))}
            </Styles.ShippingWrapper>
            <br />
            <Styles.OrderResume>
              <Heading role="h4" lineBottom={false} color="white100">
                RESUMO DO PEDIDO
              </Heading>

              <br />

              <div className="row">
                <span className="subtitle">SUBTOTAL</span>

                <span className="main-price">
                  {priceHandler.priceNumberToReadblePrice(total)}
                </span>
              </div>

              <div className="row">
                <span className="subtitle">ENTREGA</span>

                <span className="shipping-price">
                  {shippingPrice === 0
                    ? 'Insira seu cep e calcule o envio'
                    : priceHandler.priceNumberToReadblePrice(shippingPrice)}
                </span>
              </div>

              <div className="row">
                <span className="subtitle">DESCONTO</span>

                <span className="shipping-price">
                  {cashBack === 0
                    ? 'Insira seu cupom de desconto'
                    : priceHandler.priceNumberToReadblePrice(cashBack)}
                </span>
              </div>

              <div className="row">
                <span className="subtitle">TOTAL</span>

                <span className="total">
                  {priceHandler.priceNumberToReadblePrice(
                    total - cashBack + shippingPrice
                  )}
                </span>
              </div>
            </Styles.OrderResume>

            <br />

            <div className="shipping-and-cupom">
              <div className="shipping">
                <ShadowBox paddingX="xsmall" paddingY="medium">
                  <div className="space-between-variable">
                    <div>
                      <h3 className="xxlarge semiBold">
                        CALCULE FRETE E PRAZO
                      </h3>
                      <br />
                      <Link
                        href="http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm"
                        target="_blank"
                        fontSize="xlarge"
                      >
                        Não sei meu cep
                      </Link>
                    </div>
                    &nbsp;
                    <div className="start cep-input-wrapper">
                      <Input
                        value={cep}
                        onChange={(e) => setCep(cepMask(e.target.value))}
                        height={50}
                        width={200}
                        maxLength={8}
                        placeholder="MEU CEP"
                      />

                      <Button fontSize="xlarge" onClick={shippingCalculate}>
                        OK
                      </Button>
                    </div>
                  </div>
                </ShadowBox>
              </div>
              &nbsp;
              <ShadowBox className="cupom-wrapper">
                <Heading role="h4" fontSize="large" lineBottom={false}>
                  CUPOM DE DESCONTO
                </Heading>

                <div className="cupom-input-wrapper">
                  <Input
                    value={cupom}
                    onChange={(e) => setCupom(e.target.value)}
                    placeholder="MEU CUPOM"
                  />{' '}
                  <Button onClick={cupomCheck}>OK</Button>
                </div>
              </ShadowBox>
              <Button
                className="buy-button"
                fill="red100"
                radius={10}
                onClick={buy}
              >
                Finalizar compra
              </Button>
            </div>

            <Heading
              role="h2"
              lineBottom={false}
              fontSize="xxxlarge"
              margin="50px 0"
              fontWeight="bold"
            >
              COMPRE TAMBÉM
            </Heading>

            <GridWrapper>
              {tier.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.nome}
                  image={server + product.cover.url}
                  price={product.preco}
                  slug={product.slug}
                />
              ))}
            </GridWrapper>
          </Styles.Main>
        </HorizontalPaddingWrapper>
      </PaddingWrapper>
    </DefaultTemplate>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo()

  const { data } = await client.query({
    query: getTierProducts
  })
  const tierList = data.destaque.produtos.map((produto: any) => produto.produto)
  console.log(tierList)

  return {
    props: {
      tier: data.destaque.produtos.map((produto: any) => produto.produto)
    },
    revalidate: 60
  }
}

export default Carrinho
