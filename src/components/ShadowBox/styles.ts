import styled, { css } from 'styled-components'
import { Props } from '.'

export const Wrapper = styled.div<Props>`
  ${({
    theme,
    paddingX,
    paddingY,
    textAlign = 'left',
    radius = 'small',
    height,
    width
  }) => css`
    ${paddingX &&
    css`
      padding-left: ${theme.spacings[paddingX]};
      padding-right: ${theme.spacings[paddingX]};
    `}
    ${paddingY &&
    css`
      padding-top: ${theme.spacings[paddingY]};
      padding-bottom: ${theme.spacings[paddingY]};
    `}
    text-align: ${textAlign};
    background-color: ${theme.colors.white100};
    box-shadow: ${theme.boxShadow};
    border-radius: ${theme.border.radius[radius]};
    ${height &&
    css`
      height: ${height}px;
    `}

    ${width &&
    css`
      width: ${width}px;
    `}

    min-height: 50px;
    min-width: 100px;
    font-family: ${theme.font.family.ubuntu};

    strong,
    b {
      font-size: ${theme.font.sizes.xlarge};
    }

    .text-center {
      text-align: center;
    }

    .align-center {
      display: flex;
      align-items: center;
    }

    .justfy-center {
      display: flex;
      justify-content: center;
    }

    .column {
      flex-direction: column;
    }

    .padding-small {
      padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
    }

    .padding-medium {
      padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    }
  `}
`
