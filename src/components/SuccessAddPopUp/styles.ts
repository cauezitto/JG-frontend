import styled, { css } from 'styled-components'
import { Props } from '.'

export const Wrapper = styled.div<Props>`
  ${({ theme, show }) => css`
    width: 600px;
    position: fixed;
    margin: auto;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    ${!show
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `}
    align-items: center;
    justify-content: center;
  `}
`

export const SubWrapper = styled.div`
  ${({ theme }) => css`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${theme.colors.white100};
    height: 300px;
    width: 100%;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius.small};
    flex-direction: column;
    @media (max-width: ${theme.breakPoints.mobileL}) {
      width: 90%;
    }
  `}
`
