import styled, { css } from 'styled-components'
import { Props } from '.'
export const Wrapper = styled.p<Props>`
  ${({
    theme,
    color = 'darkGray',
    fontSize = 'medium',
    font = 'ubuntuCondensed',
    justify = 'flex-start',
    textAlign = 'left',
    fontWeight = 'normal',
    margin
  }) => css`
    /* display: flex; */
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes[fontSize]};
    font-family: ${theme.font.family[font]};
    font-weight: ${theme.font[fontWeight]};
    justify-content: ${justify};
    text-align: ${textAlign};

    ${margin &&
    css`
      margin: ${margin};
    `}
  `}
`
