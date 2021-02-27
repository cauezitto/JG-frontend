import { css } from 'styled-components'

import styled from 'styled-components'

export const Main = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    .buy-button {
      width: 200px;
      grid-area: button;
      height: 55px;
    }

    .shipping-and-cupom {
      /* border: 1px solid; */
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      grid-template-areas:
        'button shipping'
        '. cupom';
      justify-content: space-between;
      /* grid-template-columns: 1fr 1fr; */
    }

    .cupom-wrapper {
      display: flex;
      /* grid-template-columns: repeat(5, 1fr);
      grid-template-areas: 'title title input . .'; */
      align-items: center;
      padding: ${theme.spacings.small};
      justify-content: space-between;
      max-width: 700px;
      width: 100%;
      margin: 0 auto;
    }

    .cupom-input-wrapper {
      display: flex;

      grid-area: input;

      button {
        width: 50px;
        height: 50px;
      }
    }

    h4 {
      grid-area: title;
    }

    .shipping {
      grid-area: shipping;
      max-width: 700px;
      width: 100%;
      margin: 0 auto;

      .space-between-variable {
        display: flex;
        justify-content: space-between;
      }

      .cep-input-wrapper {
        display: flex;
        button {
          width: 50px;
          height: 50px;
        }
      }

      .wrapper {
        padding: 10px;
      }

      .table {
        display: table;
        /* border-collapse: inherit; */
        width: 100%;
        margin-top: ${theme.spacings.small};
        border: 1px ${theme.colors.gray200} solid;
        border-radius: ${theme.border.radius.small};
        padding: ${theme.spacings.xxsmall};
      }

      .head {
        font-weight: ${theme.font.semiBold};
        font-size: ${theme.font.sizes.xlarge};
      }

      .row {
        display: table-row;
        border-bottom: 2px solid ${theme.colors.gray200};
        :last-child {
          .item {
            border: 0;
          }
        }
      }

      .cell {
        font-size: ${theme.font.sizes.large};
      }
      .underline {
        border-bottom: 1px solid ${theme.colors.gray200};
      }
      .item {
        display: table-cell;
        padding: ${theme.spacings.xsmall} 0;
      }

      .unset-option {
        background: none;
        width: 26px;
        height: 26px;
        border: 2px solid ${theme.colors.gray200};
        border-radius: ${theme.border.radius.rounded};
        cursor: pointer;
        outline: 0;
      }

      svg {
        font-size: 28px;
        width: 25px;
        height: 25px;
        color: ${theme.colors.green};
        margin: 0;
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      .shipping-and-cupom {
        display: flex;
        flex-direction: column;
      }
      .space-between-variable {
        flex-direction: column;
      }
      .cupom-wrapper {
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
      }
    }
  `}
`
export const ShippingWrapper = styled.div`
  ${({ theme }) => css`
    /* border-style: solid; */
    /* border-color: ${theme.colors.gray200}; */
    display: table;
    background-color: ${theme.colors.gray300};
    padding: ${theme.spacings.xxsmall};
    font-family: ${theme.font.family.roboto};

    .header {
      display: table-row;
      padding-bottom: ${theme.spacings.xxsmall};
    }

    .title {
      display: table-cell;
      color: ${theme.colors.white100};
      text-indent: 15px;
      font-family: ${theme.font.family.roboto};
    }

    .cell {
      display: table-cell;
      font-family: ${theme.font.family.roboto};
      border-bottom: 2px solid ${theme.colors.gray50};
      padding: ${theme.spacings.xxsmall} 0;
      svg {
        cursor: pointer;
      }
    }

    .flex {
      display: flex;
      font-family: ${theme.font.family.roboto};
      max-width: 470px;
      text-align: left;
    }

    .align-center {
      align-items: center;
      /* border: 1px solid black; */
      /* margin-top: -50px; */
    }

    .justify-center {
      justify-content: center;
    }

    .space-between {
      justify-content: space-between;
    }

    .shipping-box {
      display: table-row;
      /* width: 100%; */
      font-family: ${theme.font.family.roboto};
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      .header {
        display: flex;
        justify-content: center;
        text-align: center;
      }
      .header .title {
        display: none;
      }
      .header .title:first-child {
        display: unset;
      }

      .shipping-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
      }

      .shipping-box .cell {
        border-bottom: 0;
      }

      .variable {
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
      }
    }
  `}
`

type ProductImageProps = {
  image: string
}

export const ProductImage = styled.div<ProductImageProps>`
  ${({ theme, image }) => css`
    width: 150px;
    height: 150px;
    background-image: url('${image}');
    background-position: center;
    background-size: cover;
  `}
`

export const ProductData = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`

export const ProductName = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    font-family: ${theme.font.family.roboto};
    margin: ${theme.spacings.xxsmall} 0;
  `}
`
export const ProductReference = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.roboto};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxsmall};
    b {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.semiBold};
    }
  `}
`
export const CustomName = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.roboto};
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.xxsmall};
    b {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.semiBold};
    }
  `}
`
export const CustomNumber = styled.span`
  ${({ theme }) =>
    css`
      font-family: ${theme.font.family.roboto};
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.xxsmall};
      b {
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.semiBold};
      }
    `}
`
export const Favorite = styled.span`
  ${({ theme }) =>
    css`
      font-family: ${theme.font.family.roboto};
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.xxsmall};
      color: ${theme.colors.brown};
      b {
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.semiBold};
      }
      svg {
        cursor: pointer;
      }
    `}
`
export const ProductPrice = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.brown};
    font-size: ${theme.font.sizes.xxxlarge};
    font-weight: ${theme.font.bold};
  `}
`
export const OrderResume = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray300};
    /* max-width: 700px; */
    width: 100%;
    margin: 0 auto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 4px 4px rgba(0, 0, 0, 0.25);
    /* margin: 0 auto; */
    h4 {
      padding: ${theme.spacings.xsmall};
    }

    .row {
      background-color: ${theme.colors.white100};
      border-bottom: 1px solid #aaaa;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${theme.spacings.xsmall};
    }

    .subtitle {
      font-weight: ${theme.font.semiBold};
      /* font-size: ${theme.spacings.small}; */
    }

    .main-price {
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.brown};
      text-align: right;
    }

    .shipping-price,
    .total {
      font-size: ${theme.font.sizes.large};
      text-align: right;
    }
  `}
`
