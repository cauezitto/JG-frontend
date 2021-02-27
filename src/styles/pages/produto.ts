import styled, { css } from 'styled-components'

export const DescriptionWrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.large} 0;
  `}
`
export const ProductSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: ${theme.breakPoints.tablet}) {
      display: unset;
    }
  `}
`
export const GaleryContainer = styled.section`
  ${({ theme }) => css``}
`

export const ProductAside = styled.aside`
  ${({ theme }) => css`
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;

    .add2cart {
      width: 100%;
      font-size: ${theme.font.sizes.large};
    }

    .shipping-wrapper {
      margin-top: ${theme.spacings.large};
      h3 {
        font-family: ${theme.font.family.robotoCondensed};
        font-size: ${theme.font.sizes.xxxlarge};
        font-weight: ${theme.font.semiBold};
        margin-bottom: ${theme.spacings.xxsmall};
      }
      table {
        border: 1px ${theme.colors.gray200} solid;
        border-collapse: collapse;
        width: 100%;
        margin-top: ${theme.spacings.small};
        font-family: ${theme.font.family.ubuntu};
      }

      th {
        font-weight: ${theme.font.semiBold};
        font-family: ${theme.font.family.ubuntu};
      }

      th,
      td,
      tr {
        border-bottom: 1px ${theme.colors.gray200} solid;
        text-align: center;
        padding: 15px 0;
        font-family: ${theme.font.family.ubuntu};
      }

      .disclaimer {
        font-size: ${theme.font.sizes.small};
      }
    }

    .cep-input-wrapper {
      display: flex;
      flex-direction: row;
      input {
        width: calc(100% - 50px);
      }
      button {
        height: 50px;
        width: 50px;
        font-size: ${theme.font.sizes.large};
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: ${theme.spacings.small};
    }
  `}
`

export const ProductReference = styled.span`
  ${({ theme }) => css`
    /* padding: ${theme.spacings.large} 0; */
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const ProductPrice = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.brown};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.extra};
    margin: 0;
    margin-top: ${theme.spacings.medium};
  `}
`

export const ProductInstallments = styled.span`
  ${({ theme }) => css`
    color: #aaaaaa;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    margin-top: ${theme.spacings.xxsmall};
  `}
`

export const QuantTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray200};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};
    margin-top: ${theme.spacings.small};
  `}
`

export const SizesWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    justify-content: space-around;
    display: flex;
    float: right;

    @media (max-width: ${theme.breakPoints.tablet}) {
      justify-content: space-between;
      width: 100%;
    }
  `}
`

export const PersonalizationButtonSelector = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px ${theme.colors.gray200} solid;
    height: 50px;
    color: ${theme.colors.black};
    font-weight: ${theme.font.semiBold};
    margin-bottom: ${theme.spacings.small};
    cursor: pointer;
    svg {
      font-size: ${theme.font.sizes.xxlarge};
    }
    :hover {
      transition: 250ms;
      background-color: ${theme.colors.gray200};
      color: ${theme.colors.white100};
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      width: 100%;
    }
  `}
`

export const PersonalizationInputsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    @media (max-width: ${theme.breakPoints.tablet}) {
      width: 100%;
      input {
        width: 45%;
      }
    }
  `}
`

export const PersonalizationInput = styled.input`
  ${({ theme, width }) => css`
    text-align: center;
    border: 2px ${theme.colors.gray200} solid;
    height: 50px;
    min-width: 0;
    background-color: transparent;

    ${width &&
    css`
      width: ${width}px;
    `}

    ::-webkit-input-placeholder {
      color: ${theme.colors.gray200};
      font-weight: bold;
    }
  `}
`

type SizeButtonProps = {
  selected?: boolean
}

export const SizeButton = styled.div<SizeButtonProps>`
  ${({ theme, selected }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 55px;
    border: 2px ${theme.colors.black} solid;
    cursor: pointer;
    /* font-size: ${theme.font.sizes.large}; */

    ${selected &&
    css`
      background-color: ${theme.colors.brown};
      border-color: ${theme.colors.brown};
      color: ${theme.colors.white100};
    `}

    :hover {
      transition: 250ms;
      border: 1px ${theme.colors.brown} solid;
      color: ${theme.colors.white100};
      background-color: ${theme.colors.brown};
    }
  `}
`
