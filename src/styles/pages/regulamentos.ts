import styled, { css } from 'styled-components'
export const RulesWrapper = styled.div`
  ${({ theme }) => css`
    h1,
    h2,
    h3 {
      color: ${theme.colors.brown};
      font-size: ${theme.font.sizes.xlarge};
    }

    a {
      color: ${theme.colors.brown};
    }

    p {
      font-size: ${theme.font.sizes.large};
    }
  `}
`
