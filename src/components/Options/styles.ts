import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white100};
    /* background-color: red; */
    border-radius: 50px;
    width: 100%;
    max-width: 1000px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    border: 0;
    box-shadow: ${theme.boxShadow};
    margin-bottom: ${theme.spacings.small};
    font-size: ${theme.font.sizes.xxlarge};
    font-family: ${theme.font.family.ubuntu};
    cursor: pointer;
    position: relative;

    svg {
      color: ${theme.colors.brown};
      margin-left: 10px;
    }

    .hidden {
      display: none;
    }

    .visible {
      position: absolute;
      display: inline-block;
      margin-bottom: -220px;
      width: 100%;
      background-color: ${theme.colors.white100};
      /* background-color: red; */
      box-shadow: ${theme.boxShadow};
      border-radius: 0 0 26px 26px;
      padding: ${theme.spacings.small};

      .item {
        margin-bottom: 10px;
      }
    }
  `}
`
