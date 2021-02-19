import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    width: 100%;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr 1fr;
    padding: ${theme.spacings.small} 0;
    gap: ${theme.spacings.xsmall};

    .center {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: ${theme.breakPoints.laptopS}) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`
