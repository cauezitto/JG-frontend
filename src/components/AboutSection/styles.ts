import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.yellow200};
    padding: ${theme.spacings.small} 0;
  `}
`

export const SubWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    img {
      width: 40%;
    }

    h2 {
      white-space: nowrap;
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      h2 {
        font-size: ${theme.font.sizes.extra};
      }
      img {
        width: 37%;
      }
    }

    @media (max-width: ${theme.breakPoints.mobileL}) {
      h2 {
        font-size: ${theme.font.sizes.large};
      }
      img {
        width: 37%;
      }
    }
  `}
`

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: 1px solid; */
    align-items: flex-end;

    .button-wrapper {
      margin-right: 8rem;
    }

    @media (max-width: ${theme.breakPoints.mobileL}) {
      .button-wrapper {
        margin-right: 1rem;
      }
      .button-wrapper button {
        font-size: 1rem;
        padding: 1.2rem 2rem;
      }
    }
  `}
`
