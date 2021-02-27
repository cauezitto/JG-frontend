import React from 'react'
import {
  Color,
  FontSize,
  FontWeight,
  Font,
  TextAlign,
  Justify
} from 'types/style'
import * as S from './styles'

export type LinkProps = {
  color?: Color
  iconColor?: Color
  fontSize?: FontSize
  fontWeight?: FontWeight
  font?: Font
  children: React.ReactNode | string
  textAlign?: TextAlign
  textDecoration?: 'underline' | 'none'
  href?: string
  iconSize?: FontSize
  target?: string
  justify?: Justify
}

const Link = (props: LinkProps) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)
export default Link
