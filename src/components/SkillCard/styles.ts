import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 300px;
    height: 350px;
    /* background-color: ${theme.colors.white100}; */
    border-bottom: 5px ${theme.colors.brown} solid;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */

    p {
      text-align: center;
      /* font-size: ${theme.font.sizes.small}; */
    }

    .icon {
      position: absolute;
      width: 100px;
      margin: auto;
      align-self: center;
      margin-top: 7rem;
    }
  `}
`
