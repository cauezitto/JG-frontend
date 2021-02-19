import styled, { css } from 'styled-components'

export const ContactDataWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .divisor {
      height: 200px;
      border: 1px ${theme.colors.brown} solid;
      position: absolute;
      align-self: center;
      justify-self: center;
      margin: auto;
      margin-left: 60%;
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      flex-direction: column;
      .divisor {
        height: 0;
        width: 100%;
        border: 1px ${theme.colors.brown} solid;
        position: relative;
        margin: ${theme.spacings.small} 0;
      }
    }
  `}
`

export const DataWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
  `}
`

export const SocialMediaWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
  `}
`

export const SocialMedia = styled.a`
  ${({ theme }) => css`
    height: 50px;
    width: 50px;
    border: 1px ${theme.colors.brown} solid;
    display: flex;
    color: ${theme.colors.brown};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.font.sizes.xlarge};

    /* svg{

    } */
  `}
`
