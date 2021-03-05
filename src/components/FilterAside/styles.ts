import styled, { css } from 'styled-components'

type WrapperProps = {
  show?: boolean
}

export const Wrapper = styled.aside<WrapperProps>`
  ${({ theme, show }) => css`
    width: 320px;
    min-height: 500px;
    height: fit-content;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: ${theme.spacings.xsmall};

    @media (max-width: ${theme.breakPoints.tablet}) {
      border-radius: 0;
      transition: 0.8s;
      padding: ${theme.spacings.large};
      position: fixed;
      z-index: 10;
      left: -100vw;
      top: 0;
      height: 100vh;
      width: 100vw;

      ${show &&
      css`
        transition: 0.8s;
        left: 0;
      `}
    }
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: none;

    @media (max-width: ${theme.breakPoints.tablet}) {
      display: flex;
      justify-content: space-between;
    }
  `}
`
