import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    width: 100%;

    input {
      border: 1px solid #22282f;
      border-radius: 5px;
      background-color: #d2d2d2;
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`
