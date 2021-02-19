import React from 'react'
import * as S from './styles'

export type WrapperProps = {
  children: React.ReactNode
}

const PaddingWrapper = ({ children }: WrapperProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default PaddingWrapper
