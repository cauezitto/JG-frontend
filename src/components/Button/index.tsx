import * as S from './styles'
import { Color, FontSize, FontWeight } from 'types/style'
export type ButtonProps = {
  children?: React.ReactNode | string
  fill?: Color
  color?: Color
  radius?: number
  font?: 'ubuntu' | 'roboto' | 'robotoCondensed'
  outline?: boolean
  hover?: boolean
  fontSize?: FontSize
  onClick?: VoidFunction
  fontWeight?: FontWeight
  className?: string
}

const Button = (props: ButtonProps) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)

export default Button
