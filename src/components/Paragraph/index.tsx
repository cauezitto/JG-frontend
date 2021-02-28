import {
  Color,
  FontSize,
  Justify,
  TextAlign,
  Font,
  FontWeight
} from 'types/style'
import * as S from './styles'

export type Props = {
  children: string | React.ReactNode
  fontWeight?: FontWeight
  color?: Color
  fontSize?: FontSize
  font?: Font
  justify?: Justify
  textAlign?: TextAlign
  margin?: string
}

const Paragraph = (props: Props) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)

export default Paragraph
