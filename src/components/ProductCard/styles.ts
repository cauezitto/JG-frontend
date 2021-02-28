import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    position: relative;
    width: 30rem;
    background-color: ${theme.colors.white100};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.5s;
    .cart-button {
      /* transition: 0.5s; */
      visibility: hidden;
    }

    :hover {
      transition: 3s;
      cursor: pointer;
      .cart-button {
        transition: 3s;
        visibility: visible;
      }
    }

    @media (max-width: ${theme.breakPoints.mobileL}) {
      width: 180px;
      height: 350px;
    }

    @media (max-width: ${theme.breakPoints.mobileM}) {
      width: 160px;
      height: 400px;
    }
  `}
`

export const favoriteWrapper = styled.div`
  ${({ theme }) => css`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${theme.colors.brown};
    color: ${theme.colors.white100};
    font-size: ${theme.font.sizes.large};
    position: absolute;
    top: ${theme.spacings.xxsmall};
    right: ${theme.spacings.xxsmall};
    z-index: 5;
  `}
`
export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    background-color: #f6f4f8;
    background: #f6f7f8;
    height: 30rem;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    overflow: hidden;

    @media (max-width: ${theme.breakPoints.mobileL}) {
      height: 17rem;
      /* height: 250px; */
    }

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  `}
`
export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
  `}
`
export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xsmall};
  `}
`
export const ProductTitle = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.gray200};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
  `}
`
export const ProductPrice = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.brown};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xxsmall} 0;
  `}
`
export const Installments = styled.span`
  ${({ theme }) => css`
    color: #aaaaaa;
    font-weight: ${theme.font.semiBold};
    font-size: ${theme.font.sizes.medium};
  `}
`
export const CartButton = styled.div`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    background-color: ${theme.colors.red100};
    color: ${theme.colors.white100};
    padding: ${theme.spacings.xxsmall};
    border-radius: 20px;
    cursor: pointer;
    margin-top: ${theme.spacings.xxsmall};
  `}
`
