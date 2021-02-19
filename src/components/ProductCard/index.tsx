import * as S from './styles'
import priceHandler from 'utils/handlePrice'
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'

export type ProductProps = {
  image: string
  name: string
  price: number
  // slug: string
  isFavorite?: boolean
}

const ProductCard = ({ name, image, price, isFavorite }: ProductProps) => (
  <S.Wrapper>
    <S.favoriteWrapper>
      {isFavorite ? <FaHeart /> : <FiHeart />}
    </S.favoriteWrapper>
    <S.ImageWrapper>
      <S.Image src={image} alt="produto stonko" />
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
)

export default ProductCard
