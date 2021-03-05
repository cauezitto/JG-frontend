import Paragraph from 'components/Paragraph'
import * as S from './styles'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { CgCloseO } from 'react-icons/cg'
import Heading from 'components/Heading'
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import Input from 'components/Input'
import Button from 'components/Button'
import Link from 'next/link'
import { useStateContext } from 'context'
import handlePrice from 'utils/handlePrice'
import PriceHandler from 'utils/handlePrice'
import api from 'services/api'

export type Props = {
  onClose: VoidFunction
}

const MiniCart = ({ onClose }: Props) => {
  const { cart, setCart, server } = useStateContext()
  const [cupom, setCupom] = useState('')
  const [cashBackPercent, setCashBackPercent] = useState(0)
  const [cashBack, setCashBack] = useState(0)

  const handleDelete = (position: number) => {
    let total = 0.0

    const products = cart.products.filter(
      (product) => product !== cart.products[position]
    )
    console.log(products)

    products.map((product) => {
      total = total + product.preco * product.quant
    })

    setCart({
      products,
      total
    })
  }
  const cupomCheck = async () => {
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

  const cashBackCalculate = () => {
    const total = cart.total

    const discount = (total / 100) * cashBackPercent
    // discount = total * cashBackPercent

    setCashBack(discount)
  }

  useEffect(() => {
    cashBackCalculate()
  }, [cart, cashBackPercent])

  const handleAdd = (position: number) => {
    const products = cart.products
    let total = 0

    products[position].quant = products[position].quant + 1

    products.map((product) => {
      total = total + product.preco * product.quant
    })

    setCart({
      products,
      total
    })
  }

  const handleSub = (position: number) => {
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
      total
    })
  }

  useEffect(() => {
    if (cart.total === 0) {
      onClose()
    }
  }, [cart])

  return (
    <S.Wrapper>
      <div className="close">
        <MdKeyboardArrowLeft onClick={onClose} />
      </div>
      <Paragraph
        color="black"
        fontSize="small"
        font="ubuntu"
        fontWeight="semiBold"
        justify="center"
        textAlign="center"
      >
        ITENS ADICIONADOS NO CARRINHO DE COMPRAS
      </Paragraph>

      <S.Header>
        <Paragraph
          color="gray300"
          fontSize="medium"
          font="ubuntu"
          justify="center"
          textAlign="center"
        >
          Produto
        </Paragraph>

        <Paragraph
          color="gray300"
          fontSize="medium"
          font="ubuntu"
          justify="center"
          textAlign="center"
        >
          Preço Unítario
        </Paragraph>

        <Paragraph
          color="gray300"
          fontSize="medium"
          font="ubuntu"
          justify="center"
          textAlign="center"
        >
          Quantidade
        </Paragraph>

        <div></div>
      </S.Header>

      <S.ProductsList>
        {cart.products.map((product, index) => (
          <>
            <div className="product cell">
              <img
                src={server + product.cover.url}
                alt={product.nome}
                className="product-image"
              />
              <Paragraph
                color="black"
                fontWeight="bold"
                fontSize="large"
                justify="center"
                textAlign="center"
              >
                {product.nome}
              </Paragraph>

              <Paragraph
                color="black"
                font="ubuntu"
                fontSize="xsmall"
                justify="center"
                textAlign="center"
              >
                <strong>Referência:</strong> {product.slug}
              </Paragraph>
            </div>
            <div className="price cell">
              <Heading
                fontSize="xlarge"
                role="h4"
                lineBottom={false}
                margin="0"
                justify="center"
              >
                {handlePrice.priceNumberToReadblePrice(product.preco)}
              </Heading>
            </div>
            <div className="quant cell">
              <div className="quant-controller">
                <FiMinusCircle
                  onClick={() => {
                    handleSub(index)
                  }}
                />

                {product.quant}

                <FiPlusCircle
                  onClick={() => {
                    handleAdd(index)
                  }}
                />
              </div>
            </div>
            <div className="erase cell">
              <CgCloseO
                onClick={() => {
                  handleDelete(index)
                }}
              />
            </div>
          </>
        ))}
      </S.ProductsList>

      <S.VoucherContainer>
        <Paragraph color="black" fontSize="large" fontWeight="semiBold">
          CUPOM DE DESCONTO
        </Paragraph>
        <div className="input-container">
          <Input
            value={cupom}
            onChange={(e) => setCupom(e.target.value.toUpperCase())}
          />
          &nbsp;
          <Button fill="brown" onClick={cupomCheck}>
            OK
          </Button>
        </div>
      </S.VoucherContainer>
      <S.SubTotal>
        <div>
          Subtotal:{' '}
          <strong>
            {PriceHandler.priceNumberToReadblePrice(cart.total - cashBack)}
          </strong>
        </div>
      </S.SubTotal>

      <S.BuyOrView>
        <div></div>

        <Link href="/carrinho" passHref>
          <a>
            <Button fill="red100" fontSize="large">
              FINALIZAR COMPRA
            </Button>
          </a>
        </Link>
      </S.BuyOrView>
    </S.Wrapper>
  )
}

export default MiniCart
