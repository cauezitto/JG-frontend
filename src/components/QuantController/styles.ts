import styled, { css } from 'styled-components'
type StyleProps = {
  size: 'small' | 'medium' | 'large' | 'block'
}

const wrapperModifier = {
  width: {
    small: css`
      width: 60%;
    `,

    medium: css`
      width: 70%;
    `,

    large: css`
      width: 80%;
    `,

    block: css`
      width: 100%;
    `
  }
}

export const Wrapper = styled.div<StyleProps>`
  ${({ theme, size = 'small' }) => css`
    height: 60px;
    width: 130px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: ${theme.spacings.small} 0;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      text-justify: center;
      margin-bottom: 5px;
      font-size: ${theme.font.sizes.xlarge};
      border: 1px ${theme.colors.gray200} solid;
      height: 40px;
      width: 50px;
    }

    button {
      border: 0;
      padding: 0;
      margin: 0;
      background: none;
      outline: 0;
      align-items: center;
      justify-content: center;
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.gray200};
      cursor: pointer;

      svg {
        margin: auto;
      }
    }
  `}
`
