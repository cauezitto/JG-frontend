import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 13%;

    @media (max-width: ${theme.breakPoints.tablet}) {
      padding: 0 5%;
    }
  `}
`
