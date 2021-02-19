import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 250px;
    margin-top: 15rem;
    /* border: 1px solid; */
  `}
`

export const Line = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.black};
    display: flex;
    justify-content: space-around;
    align-items: center;
  `}
`

type PointProps = {
  selected?: boolean
}

export const Point = styled.div<PointProps>`
  ${({ theme, selected }) => css`
    width: 10px;
    height: 10px;
    background-color: ${theme.colors.black};
    border-radius: 50%;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    img {
      margin-top: -10rem;
    }

    &::after {
      content: '';
      white-space: nowrap;
      position: absolute;
      margin-bottom: -3rem;
      display: flex;
      font-size: ${theme.font.sizes.small};
      /* height: 20px; */
      /* width: 100%; */
      /* border: 1px solid; */
    }

    ${!selected &&
    css`
      img {
        visibility: hidden;
      }

      &::after {
        content: '(clique para interagir)';
      }
    `}

    @media (max-width: ${theme.breakPoints.mobileL}) {
      &::after {
        font-size: ${theme.font.sizes.xsmall};
      }
    }
  `}
`

export const Paragraph = styled.p<PointProps>`
  ${({ theme, selected }) => css`
    margin: ${theme.spacings.xxxgiant} 0;
    text-align: center;

    b,
    a {
      color: ${theme.colors.brown};
    }

    ${!selected &&
    css`
      display: none;
    `}
  `}
`
