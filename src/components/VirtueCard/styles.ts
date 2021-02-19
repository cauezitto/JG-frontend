import styled, { css } from 'styled-components'
import { Color } from 'types/style'

type WrapperProps = {
  fill?: Color | 'green100'
  color?: Color
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, fill = 'red100', color = 'white100' }) => css`
    background-color: ${theme.colors[fill]};
    width: 220px;
    height: 350px;
    border-radius: ${theme.border.radius.medium};
    color: ${theme.colors[color]};

    margin-bottom: ${theme.spacings.small};

    hr {
      border: 0;
      border-bottom: 1px ${theme.colors.black} solid;
    }

    p {
      text-align: center;
    }
  `}
`
