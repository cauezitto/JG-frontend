import React from 'react'
import * as S from './styles'

export type GridProps = {
  children: React.ReactNode
}

const GridWrapper = ({ children }: GridProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default GridWrapper
