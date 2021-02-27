import * as S from './styles'
import { FontWeight, Color, Font, FontSize } from 'types/style'

export type Props = {
  fontWeight?: FontWeight
  font?: Font
  color?: Color
  fontSize?: FontSize
  margin?: string
  children: string | React.ReactNode[]
}

const Label = (props: Props) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)

export default Label
