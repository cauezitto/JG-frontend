import * as S from './styles'
import Link from 'next/link'
import priceHandler from 'utils/handlePrice'
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { useCookies } from 'react-cookie'
import { useState, useEffect } from 'react'

export type ProductProps = {
  id: number
  image: string
  name: string
  price: number
  slug: string
  isFavorite?: boolean
}

const ProductCard = ({ id, name, image, price, slug }: ProductProps) => {
  const [cookie] = useCookies(['user'])
  const [isFavorite, setIsFavorite] = useState(false)

  const checkIsFavorite = () => {
    if (!cookie.token) {
      return
    }

    if (!cookie.user) {
      return
    }

    const { favorites } = cookie.user

    if (!favorites) {
      return
    }

    favorites.map((productId: number) => {
      if (productId == id) {
        setIsFavorite(true)
      }
    })
  }

  useEffect(() => {
    checkIsFavorite()
  }, [])

  return (
    <Link href={`/produto/${slug}`} passHref>
      <S.Wrapper>
        <S.favoriteWrapper>
          {isFavorite ? <FaHeart /> : <FiHeart />}
        </S.favoriteWrapper>
        <S.ImageWrapper>
          <S.Image src={image} alt={name} />
        </S.ImageWrapper>
        <S.InfoWrapper>
          <S.ProductTitle>{name}</S.ProductTitle>
          <S.ProductPrice>
            {priceHandler.priceNumberToReadblePrice(price ? price : 0)}
          </S.ProductPrice>
          <S.Installments>{`Ou então 3x de ${priceHandler.priceNumberToReadblePrice(
            (price ? price : 0) / 3
          )}`}</S.Installments>
          <div className="cart-button">
            <S.CartButton role="button">ADD CARRINHO</S.CartButton>
          </div>
        </S.InfoWrapper>
      </S.Wrapper>
    </Link>
  )
}

export default ProductCard
