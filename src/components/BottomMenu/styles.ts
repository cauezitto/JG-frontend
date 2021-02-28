import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: ${theme.colors.silver};
    border-radius: ${theme.border.radius.rounded} ${theme.border.radius.rounded}
      0 0;
    .sub-wrapper {
      height: 60px;
      /* background: ${theme.colors.brown}; */
      background: rgb(34, 40, 47);
      background: linear-gradient(
        180deg,
        rgba(34, 40, 47, 1) 7%,
        rgba(34, 40, 47, 0.6867121848739496) 48%,
        rgba(34, 40, 47, 1) 91%
      );
      border-radius: ${theme.border.radius.rounded}
        ${theme.border.radius.rounded} 0 0;
      display: flex;
      padding: ${theme.spacings.xxsmall} 10%;
      align-items: center;
      justify-content: space-between;
    }

    a {
      color: ${theme.colors.white100};
    }

    a,
    button {
      text-decoration: none;
      font-size: ${theme.font.sizes.extra};
    }

    button {
      border: 0;
      outline: 0;
      background-color: ${theme.colors.white100};
      color: ${theme.colors.red100};
      border-radius: 50%;
      height: 80px;
      width: 80px;
      margin-bottom: -20px;
    }
  `}
`
