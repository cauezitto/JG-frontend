import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    transition: 1s;
    background-color: ${theme.colors.white100};
    width: 100%;
    z-index: 10;
    /* max-width: 500px; */
    /* overflow: hidden; */
    a {
      text-decoration: none;
    }
  `}
`

export const AccountWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${theme.spacings.small};
    border-bottom: 2px solid ${theme.colors.gray50};
    height: 100px;
    button {
      width: 150px;
    }
  `}
`

export const NavigationLink = styled.a`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.semiBold};
    padding: ${theme.spacings.small};
    border-bottom: 2px solid ${theme.colors.gray50};
    height: 70px;

    svg {
      color: ${theme.colors.brown};
      font-size: ${theme.font.sizes.max};
    }
  `}
`

export const DefaultPagesNavigationWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.small};
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 7%,
      rgba(23, 27, 32, 1) 18%,
      rgba(34, 40, 47, 0.865983893557423) 85%
    );

    display: flex;
    flex-direction: column;
  `}
`

export const DefaultLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white100};
    font-size: ${theme.font.sizes.xxlarge};
    margin: ${theme.spacings.xsmall} 0;
  `}
`
