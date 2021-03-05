import styled, { css } from 'styled-components'

export const Content = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;

    @media (max-width: ${theme.breakPoints.tablet}) {
      flex-direction: column;
      justify-content: center;
    }
  `}
`

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;

  .center {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`

export const MobileFilterOpener = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (max-width: ${theme.breakPoints.tablet}) {
      display: flex;
      width: 100%;
      height: 50px;
      justify-content: flex-end;
      align-items: center;
      font-size: ${theme.font.sizes.large};
      svg {
        color: ${theme.colors.brown};
      }

      .filter-opener-button {
        border: 1px solid ${theme.colors.black};
        padding: 2px 5px;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  `}
`

export const ViewMoreWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};

    cursor: pointer;
  `}
`
