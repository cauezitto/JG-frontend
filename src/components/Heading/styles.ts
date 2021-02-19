import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

interface StyleHeadingProps extends HeadingProps {
  theme: DefaultTheme
}

const style = ({
  theme,
  font = 'roboto',
  fontSize,
  color = 'black',
  lineBottom = true,
  lineBottomWidth = 300,
  textAlign = 'center',
  justify = 'center',
  lineColor = 'brown',
  margin,
  strongColor,
  fontWeight = 'semiBold'
}: StyleHeadingProps) => css`
  color: ${theme.colors[color]};
  font-family: ${theme.font.family[font]};
  position: relative;
  justify-content: ${justify};
  text-align: ${textAlign};
  font-weight: ${theme.font[fontWeight]};
  ${margin &&
  css`
    margin: ${margin};
  `}
  strong,
  b {
    ${strongColor &&
    css`
      color: ${theme.colors[strongColor]};
    `}
  }
  ${fontSize &&
  css`
    font-size: ${theme.font.sizes[fontSize]};
  `}

  ${lineBottom &&
  css`
    display: flex;
    flex-direction: column;
    &::after {
      content: ' ';
      width: 100%;
      max-width: ${lineBottomWidth}px;
      border-bottom: 2px solid;
      border-color: ${theme.colors[lineColor]};
      bottom: -1rem;
      position: absolute;
      align-self: center;
    }
  `}
`

export const Heading1 = styled.h1<HeadingProps>`
  ${(props) => style(props)}
`
export const Heading2 = styled.h2<HeadingProps>`
  ${(props) => style(props)}
`
export const Heading3 = styled.h3<HeadingProps>`
  ${(props) => style(props)}
`
export const Heading4 = styled.h4<HeadingProps>`
  ${(props) => style(props)}
`
