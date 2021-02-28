import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const Wrapper = styled.button<ButtonProps>`
  ${({
    theme,
    fill = 'brown',
    color = 'white100',
    radius = 0,
    font = 'roboto',
    outline,
    fontSize,
    fontWeight
  }) => css`
    outline: 0;
    border: 0;
    cursor: pointer;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    background-color: ${theme.colors[fill]};
    color: ${theme.colors[color]};
    font-weight: ${theme.font.bold};
    border-radius: ${radius};
    font-family: ${theme.font.family[font]};
    display: flex;
    justify-content: center;
    align-items: center;

    ${radius &&
    css`
      border-radius: ${radius}px;
    `}

    ${fontWeight &&
    css`
      font-weight: ${theme.font[fontWeight]};
    `}
    ${fontSize &&
    css`
      font-size: ${theme.font.sizes[fontSize]};
    `}
    ${outline &&
    css`
      border: 2px black solid;
      background: transparent;
    `}
  `}
`
