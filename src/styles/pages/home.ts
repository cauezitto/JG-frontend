import styled, { css } from 'styled-components'
import { Spacing } from 'types/style'

type WrapperProps = {
  padding?: Spacing
}

export const HorizontalPaddingWrapper = styled.div<WrapperProps>`
  ${({ theme, padding = 'medium' }) => css`
    padding: ${theme.spacings[padding]} 0;
  `}
`
