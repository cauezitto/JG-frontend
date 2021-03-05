import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    width: 500px;
    min-height: 200px;
    background-color: ${theme.colors.silver};
    position: relative;
    border: 1px;
    padding: ${theme.spacings.xsmall} 0 0 0;
    box-shadow: ${theme.boxShadow};

    .close {
      position: absolute;
      top: 10px;
      left: 0;
      cursor: pointer;

      svg {
        color: ${theme.colors.orange};
        font-size: ${theme.font.sizes.xlarge};
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      width: 99vw;
      height: 100vh;
    }
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    margin-top: ${theme.spacings.xxsmall};
    background-color: #e2e2e2;
    padding: ${theme.spacings.xxsmall} 0;
    margin-bottom: 5px;
  `}
`

export const ProductsList = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0.5fr;
    max-height: 380px;
    overflow: auto;

    .erase {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      svg {
        color: red;
        font-size: ${theme.font.sizes.xxlarge};
        cursor: pointer;
      }
    }

    .product-image {
      width: 95%;
    }

    .price {
      display: flex;
      align-items: flex-end;
    }

    .cell {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: ${theme.spacings.xsmall};
    }

    .quant-controller {
      border: 2px #d2d2d2 solid;
      padding: ${theme.spacings.xxsmall};
      border-radius: ${theme.border.radius.small};
      width: 100px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: ${theme.font.sizes.large};

      svg {
        color: ${theme.colors.gray300};
        cursor: pointer;
      }
    }
  `}
`

export const VoucherContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xxsmall};
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-top: ${theme.spacings.xxlarge};

    .input-container {
      display: flex;
      justify-content: space-between;
    }
  `}
`

export const SubTotal = styled.div`
  ${({ theme }) => css`
    display: flex;
    border-top: 1px solid #d2d2d2;
    border-bottom: 1px solid #d2d2d2;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: ${theme.font.sizes.xxlarge};
    padding: ${theme.spacings.xxsmall} 0;
    font-family: ${theme.font.family.ubuntu};
  `}
`

export const BuyOrView = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small};

    a {
      cursor: pointer;
      color: ${theme.colors.black};
      text-decoration: none;
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.semiBold};
      font-family: ${theme.font.family.ubuntu};
    }
  `}
`
