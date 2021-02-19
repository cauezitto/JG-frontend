import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;
  `}
`

export const StampsAndPayment = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${theme.breakPoints.mobileL}) {
      flex-direction: column;
      h4 {
        font-size: ${theme.font.sizes.large};
      }

      img {
        height: auto;
        width: 80%;
      }
    }
  `}
`
export const CopyWriteWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.small} 0;
    display: flex;
    align-items: center;
    justify-content: center;
    /* font-size: ${theme.font.sizes.large}; */
  `}
`
