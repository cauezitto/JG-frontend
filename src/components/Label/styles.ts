import styled, { css } from 'styled-components'
import { Props } from '.'
export const Wrapper = styled.label<Props>`
  ${({
    theme,
    color = 'black',
    fontSize = 'large',
    font = 'roboto',
    fontWeight = 'normal',
    margin
  }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.sizes[fontSize]};
    color: ${theme.colors[color]};
    font-family: ${theme.font.family[font]};
    font-weight: ${theme.font[fontWeight]};
    ${margin &&
    css`
      margin: ${margin};
    `}
  `}
`
