import styled, { css } from 'styled-components'
import { Color } from 'types/style'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 7%,
      rgba(23, 27, 32, 1) 18%,
      rgba(34, 40, 47, 0.865983893557423) 85%
    );
    height: 190px;
    width: 100%;
    z-index: 10;
    position: relative;
    display: inline-block;

    .menu-mobile {
      position: absolute;
      width: 100%;
      transition: 0.3s;
    }

    .hide {
      transition: 0.3s;
      height: 0px;
      overflow: hidden;
      margin-bottom: -20px;
    }

    .mobile {
      display: none;
    }
    @media (max-width: ${theme.breakPoints.tablet}) {
      .mobile {
        display: unset;
      }
      .desktop {
        display: none;
      }
    }
  `}
`

export const Logo = styled.img`
  ${({ theme }) => css`
    width: 180px;
    height: 100px;
    /* border: 1px solid white; */
    grid-area: logo;

    @media (max-width: ${theme.breakPoints.mobileL}) {
      width: 120px;
      height: 70px;
      margin-bottom: -10px;
      /* border: 1px red solid; */
    }
  `}
`
export const GradientWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`
export const ContactWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    padding: ${theme.spacings.small} 0 0 0;
    justify-content: space-between;
    .social-media {
      width: 60px;
      display: flex;
      justify-content: space-between;
    }

    .contact {
      display: flex;
      justify-content: space-between;
    }

    .divisor {
      width: 50px;
      width: 2px;
      background-color: ${theme.colors.yellow300};
      margin: 0 ${theme.spacings.xxsmall};
    }
  `}
`
export const SearchWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left,
    .right {
      display: none;
    }

    .left {
      grid-area: left;
    }

    .right {
      grid-area: right;
    }

    .left,
    .right {
      justify-content: space-between;
      width: 50%;
      height: 100%;
      align-items: flex-end;
      margin: auto;
      min-width: 80px;

      .menu,
      .cart,
      .favorite,
      .login {
        /* margin-bottom: ${theme.spacings.xxsmall}; */
        font-size: ${theme.font.sizes.xxxlarge};
        cursor: pointer;
        display: flex;
        height: 100%;
        align-items: flex-end;
      }

      .favorite {
        display: flex;
        color: ${theme.colors.yellow300};
        font-size: ${theme.font.sizes.large};
        align-items: flex-end;
        height: 100%;
      }

      .login {
        display: flex;
        height: 100%;
        align-items: flex-end;
        color: ${theme.colors.white100};
        font-size: ${theme.font.sizes.small};
        svg {
          color: ${theme.colors.yellow300};
          font-size: ${theme.font.sizes.medium};
        }
      }

      .cart {
        color: ${theme.colors.yellow300};
        display: flex;
        a {
          color: ${theme.colors.yellow300};
          margin: 0;
          padding: 0;
          margin-bottom: -6px;
        }
      }

      .menu {
        color: ${theme.colors.white100};
      }
    }

    .logo {
      grid-area: logo;
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas: 'left logo right';

      align-items: center;
      justify-content: space-between;

      .right,
      .left {
        display: flex;
      }
    }
  `}
`

type LinkProps = {
  iconColor?: Color
}

export const ExteralLink = styled.a<LinkProps>`
  ${({ theme, iconColor = 'white100' }) => css`
    color: ${theme.colors.white100};
    /* font-size: ${theme.font.sizes.large}; */
    /* font-weight: ${theme.font.semiBold}; */
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    /* justify-content: center; */

    svg {
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors[iconColor]};
    }
  `}
`
export const NavWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.yellow300};
    position: absolute;
    bottom: 0;
    height: 50px;
    /* display: flex;
    align-items: center; */
    /* justify-content: space-between; */
  `}
`

export const SearchInputWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white100};
    border-radius: 10px;
    width: 50%;
    display: flex;
    justify-content: space-between;
    input {
      border: 0;
      border-radius: 10px;
      width: calc(90% - 100px);
    }
    button {
      padding: 1.2rem 2rem;
    }
  `}
`

export const NavSubWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    /* border: 1px red solid; */
    align-items: center;

    @media (max-width: ${theme.breakPoints.tablet}) {
      justify-content: center;
      .input-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: ${theme.colors.white100};
        border-radius: 5px;
        input {
          border: 0;
          width: calc(100% - 50px);
          height: 20px;
          background-color: ${theme.colors.white100};
          border-radius: 5px;
        }

        button {
          padding: 0.4rem 1.1rem;
        }
      }
    }
  `}
`

export const CategoriesWrapper = styled.div`
  ${({ theme }) => css`
    height: 50px;
    background-color: ${theme.colors.brown};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.xxsmall};
    color: ${theme.colors.white100};
    white-space: nowrap;
    /* cursor: ; */
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;
      list-style: none;
      align-items: center;
      /* border: 1px solid; */
    }

    ul li {
      padding: 0 ${theme.spacings.xsmall};
      display: flex;
      /* justify-content: center; */
    }

    ul li:last-child {
      padding: 0 0 0 ${theme.spacings.xsmall};
    }

    ul li a {
      color: ${theme.colors.black};
      font-weight: ${theme.font.semiBold};
      white-space: nowrap;
    }
  `}
`

export const Dropdown = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;

    .menu {
      display: none;
    }

    :hover {
      .menu {
        display: flex;
      }
    }
  `}
`

export const DropMenu = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    background-color: #fff;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    display: flex;
    flex-direction: column;

    ul {
      list-style: none;
    }

    ul li {
      display: flex;
      flex-direction: column;
    }

    ul li a {
      text-decoration: none;
      color: ${theme.colors.gray300};
      margin-bottom: ${theme.spacings.xxsmall};
      text-align: center;
      cursor: pointer;

      :hover {
        transition: 100ms;
        color: ${theme.colors.brown};
      }
    }
  `}
`
