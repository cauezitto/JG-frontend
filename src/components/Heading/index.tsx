import * as S from './styles'
import {
  FontSize,
  Color,
  Font,
  TextAlign,
  Justify,
  FontWeight
} from 'types/style'

export type HeadingProps = {
  children?: React.ReactNode | string
  role?: 'h1' | 'h2' | 'h3' | 'h4'
  color?: Color
  fontSize?: FontSize
  font?: Font
  lineBottom?: boolean
  lineBottomWidth?: number
  textAlign?: TextAlign
  justify?: Justify
  lineColor?: Color
  margin?: string
  strongColor?: Color
  fontWeight?: FontWeight
}

const Heading = (props: HeadingProps) => {
  if (props.role === 'h1')
    return <S.Heading1 {...props}>{props.children}</S.Heading1>
  else if (props.role === 'h2')
    return <S.Heading2 {...props}>{props.children}</S.Heading2>
  else if (props.role === 'h3')
    return <S.Heading3 {...props}>{props.children}</S.Heading3>
  else if (props.role === 'h4')
    return <S.Heading4 {...props}>{props.children}</S.Heading4>

  return <S.Heading1 {...props}>{props.children}</S.Heading1>
}

export default Heading
