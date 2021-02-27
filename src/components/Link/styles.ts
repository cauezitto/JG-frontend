import styled, { css } from 'styled-components'
import { LinkProps } from '.'

export const Wrapper = styled.a<LinkProps>`
  ${({
    theme,
    iconColor = 'brown',
    color = 'black',
    textAlign = 'left',
    fontSize = 'large',
    fontWeight = 'normal',
    font = 'roboto',
    textDecoration = 'underline',
    iconSize,
    justify
  }) => css`
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: ${textDecoration};
    font-family: ${theme.font.family[font]};
    font-weight: ${theme.font[fontWeight]};
    font-size: ${theme.font.sizes[fontSize]};
    color: ${theme.colors[color]};
    text-align: ${textAlign};
    ${justify &&
    css`
      display: flex;
      justify-content: ${justify};
    `}
    svg {
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors[iconColor]};
      ${iconSize &&
      css`
        font-size: ${theme.font.sizes[iconSize]};
      `}
    }
  `}
`
