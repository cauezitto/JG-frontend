import { useState, useEffect } from 'react'
import DefaultTemplate from 'templates/Default'
import PaymentBanner from 'components/PaymentsBanner'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import productsMock from 'mocks/products.json'
import Heading from 'components/Heading'
import PaddingWrapper from 'components/PaddingWrapper'
import GridWrapper from 'components/GridWrapper'
import ProductCard from 'components/ProductCard'
import Input from 'components/Input'
import { MdKeyboardArrowDown } from 'react-icons/md'
import {
  DescriptionWrapper,
  ProductSection,
  ProductAside,
  ProductReference,
  ProductPrice,
  ProductInstallments,
  QuantTitle,
  SizesWrapper,
  PersonalizationButtonSelector,
  PersonalizationInput,
  PersonalizationInputsWrapper,
  SizeButton
} from 'styles/pages/produto'
import { useStateContext } from 'context'
import ProductGalery from 'components/ProductGalery'
import { HorizontalPaddingWrapper } from 'styles/pages/home'
import priceHandler from 'utils/handlePrice'
import QuantController from 'components/QuantController'
import Button from 'components/Button'
import { cepMask } from 'utils/masks'
import { getProductBySlug } from 'graphql/queryes/produtos'
import { initializeApollo } from 'utils/apollo'

type ProductProps = {
  id: number
  nome: string
  preco: number
  descricao: string
  kid: boolean
  slug: string
  marca: {
    nome: string
  }
  tamanho: {
    adulto?: {
      P: boolean
      M: boolean
      G: boolean
      GG: boolean
    }
    // kid?:
  }
  cover: {
    url: string
  }
  galeria: Array<{
    url: string
  }>
}

type ShippingOption = {
  id: number
  name: string
  price: number
  delivery_time: number
}

const Produto = ({
  id,
  nome,
  preco,
  descricao,
  cover,
  marca,
  galeria,
  slug,
  kid,
  tamanho
}: ProductProps) => {
  const { server } = useStateContext()
  const [quant, setQuant] = useState(1)
  const [cep, setCep] = useState('')
  const [size, setSize] = useState('')
  const [personalization, setPersonalization] = useState({
    isCustom: false,
    name: '',
    number: ''
  })
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([])
  const { cart, setCart } = useStateContext()
  const shippingCalculate = () => {
    setShippingOptions([
      {
        id: 1,
        name: 'SEDEX',
        price: 30,
        delivery_time: 15
      }
    ])
  }

  const handleAddQuant = () => {
    setQuant(quant + 1)
  }

  const handleSubQuant = () => {
    setQuant(quant - 1)
  }

  const addToCart = () => {
    if (size === '') {
      alert('Por favor selecione o tamanho desejado')
      return
    }
    const product = {
      id,
      nome,
      preco,
      descricao,
      cover,
      slug,
      size,
      custom: {
        isCustom: personalization.isCustom,
        name: personalization.name,
        number: personalization.number
      },
      quant
    }
    console.log(product)
    const products = [...cart.products, product]
    let total = 0.0

    products?.map((item) => {
      total = total + item.preco * item.quant
    })

    setCart({
      products,
      total
    })

    // setShow(true)
    alert('produto adicionado')
  }

  useEffect(() => {
    // alert('Aloohhh')
    if (cep.length === 8) {
      shippingCalculate()
    }
    setQuant(1)
    setSize('')
  }, [slug])

  if (!id) {
    return <>Pagina inválida</>
  }

  return (
    <DefaultTemplate>
      <PaymentBanner />
      <PaddingWrapper>
        <HorizontalPaddingWrapper>
          <ProductSection>
            <ProductGalery images={galeria} />
            <ProductAside>
              <Heading
                lineBottom={false}
                fontSize="xxxlarge"
                fontWeight="bold"
                textAlign="left"
                margin="0 0 10px 0"
              >
                {nome?.toUpperCase()}
              </Heading>
              <ProductReference>
                <b>Referencia:</b> {slug}
              </ProductReference>
              {/* <br />
              <br /> */}
              <hr />

              <ProductPrice>
                {priceHandler.priceNumberToReadblePrice(preco)}
              </ProductPrice>

              <ProductInstallments>
                {`ou então 3x de ${priceHandler.priceNumberToReadblePrice(
                  preco / 3
                )}`}
              </ProductInstallments>

              <QuantTitle>Quantidade</QuantTitle>

              <QuantController
                handleAdd={handleAddQuant}
                handleSub={handleSubQuant}
                quant={quant}
              />

              <Button
                onClick={addToCart}
                className="add2cart"
                fill="red100"
                radius={50}
              >
                ADD CARRINHO
              </Button>
              <br />
              <PersonalizationButtonSelector
                onClick={() =>
                  setPersonalization((prevState) => ({
                    ...prevState,
                    isCustom: !personalization.isCustom
                  }))
                }
              >
                PERSONALIZAÇÃO &nbsp; <MdKeyboardArrowDown />
              </PersonalizationButtonSelector>

              {personalization.isCustom && (
                <PersonalizationInputsWrapper>
                  <PersonalizationInput
                    width={180}
                    placeholder="NOME"
                    value={personalization.name}
                    onChange={(e) =>
                      setPersonalization((prevState) => ({
                        ...prevState,
                        name: e.target.value
                      }))
                    }
                  />
                  <PersonalizationInput
                    width={100}
                    maxLength={2}
                    placeholder="NÚMERO"
                    value={personalization.number}
                    onChange={(e) =>
                      setPersonalization((prevState) => ({
                        ...prevState,
                        number: e.target.value
                      }))
                    }
                  />
                </PersonalizationInputsWrapper>
              )}

              {/* tamanhos */}
              <SizesWrapper>
                {kid ? (
                  <div>tamanho criança</div>
                ) : (
                  <>
                    {tamanho?.adulto?.P && (
                      <SizeButton
                        selected={size === 'P' && true}
                        className="size-button"
                        onClick={() => {
                          setSize('P')
                        }}
                        color={size === 'M' ? 'white100' : 'black'}
                      >
                        P
                      </SizeButton>
                    )}
                    {tamanho?.adulto?.M && (
                      <SizeButton
                        selected={size === 'M' && true}
                        className="size-button"
                        onClick={() => {
                          setSize('M')
                        }}
                        color={size === 'M' ? 'white100' : 'black'}
                      >
                        M
                      </SizeButton>
                    )}
                    {tamanho?.adulto?.G && (
                      <SizeButton
                        selected={size === 'G' && true}
                        className="size-button"
                        onClick={() => {
                          setSize('G')
                        }}
                        color={size === 'M' ? 'white100' : 'black'}
                      >
                        G
                      </SizeButton>
                    )}
                    {tamanho?.adulto?.GG && (
                      <SizeButton
                        selected={size === 'GG' && true}
                        className="size-button"
                        onClick={() => {
                          setSize('GG')
                        }}
                        color={size === 'GG' ? 'white100' : 'black'}
                      >
                        GG
                      </SizeButton>
                    )}
                  </>
                )}
              </SizesWrapper>

              <div className="shipping-wrapper">
                <h3>Calcular frete e prazo</h3>

                <div className="cep-input-wrapper">
                  <Input
                    placeholder="00000-000"
                    type="text"
                    maxLength={8}
                    borderColor="gray100"
                    borderWidth={1}
                    value={cep}
                    fontSize="xlarge"
                    onChange={(e) => setCep(cepMask(e.target.value))}
                  />

                  <Button onClick={shippingCalculate}>OK</Button>
                </div>

                {shippingOptions[0] && (
                  <>
                    <table className={shippingOptions[0] ? '' : 'hidden'}>
                      <tr>
                        <th>Entrega </th>
                        <th>Frete</th>
                        <th>Prazo</th>
                      </tr>

                      {shippingOptions?.map((option) => (
                        <tr key={option?.id}>
                          <td>{option?.name} </td>
                          <td>
                            {priceHandler.priceNumberToReadblePrice(
                              Number(option?.price)
                            )}{' '}
                          </td>
                          <td>{`${option?.delivery_time} dias(s)`} </td>
                        </tr>
                      ))}
                    </table>

                    <span className="disclaimer">
                      * Este prazo de entrega está considerando a encomenda do
                      produto + prazo de entrega.
                    </span>
                  </>
                )}
              </div>
            </ProductAside>
          </ProductSection>
        </HorizontalPaddingWrapper>

        <Heading
          role="h2"
          lineBottom={false}
          fontSize="xxxlarge"
          margin="50px 0"
        >
          QUEM VIU ESTE PRODUTO, VIU TAMBÉM
        </Heading>

        <GridWrapper>
          {productsMock?.map((product, index) => (
            <ProductCard
              key={index}
              name={product.nome}
              image={server + product.cover.url}
              price={product.preco}
              slug={product.slug}
            />
          ))}
        </GridWrapper>

        <Heading role="h2" margin="50px 0 0 0" fontSize="extra">
          DESCRIÇÃO
        </Heading>

        <DescriptionWrapper dangerouslySetInnerHTML={{ __html: descricao }} />
      </PaddingWrapper>
    </DefaultTemplate>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = productsMock

  return {
    paths: products?.map((product) => {
      return { params: { slug: product.slug } }
    }),
    fallback: true
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  // console.log(params)
  if (!params) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const slug = params.slug as string

  // const product = productsMock.find((product) => product.slug === slug)

  const client = initializeApollo()

  const response = await client.query({
    query: getProductBySlug,
    variables: {
      slug
    }
  })

  const { produtos } = response.data

  return {
    props: produtos[0],
    revalidate: 60
  }
}

export default Produto
