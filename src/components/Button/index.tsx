import * as S from './styles'
import { Color, FontSize, FontWeight } from 'types/style'
export type ButtonProps = {
  children?: React.ReactNode | string
  fill?: Color
  color?: 'white100' | 'white200' | 'white300' | 'black'
  radius?: number
  font?: 'ubuntu' | 'roboto' | 'robotoCondensed'
  outline?: boolean
  hover?: boolean
  fontSize?: FontSize
  onClick?: VoidFunction
  fontWeight?: FontWeight
}

const Button = (props: ButtonProps) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)

export default Button
