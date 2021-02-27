import { FiPlus, FiMinus } from 'react-icons/fi'
import * as S from './styles'

export type Props = {
  quant: number
  handleAdd: any
  handleSub: any
  size?: 'small' | 'medium' | 'large' | 'block'
}

const QuantController = ({
  quant,
  handleAdd,
  handleSub,
  size = 'small'
}: Props) => (
  <S.Wrapper size={size}>
    <button onClick={quant > 1 ? handleSub : null}>
      <FiMinus />
    </button>
    <span>{quant}</span>
    <button onClick={handleAdd}>
      <FiPlus />
    </button>
  </S.Wrapper>
)

export default QuantController
