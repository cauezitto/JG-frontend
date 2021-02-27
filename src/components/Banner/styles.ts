import styled, { css } from 'styled-components'

type WrapperProps = {
  bg: string
}
export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, bg }) => css`
    background-image: url('${bg}');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.yellow200};
    font-size: ${theme.font.sizes.max};
    text-align: center;
  `}
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    width: 60%;
    min-width: 250px;
    height: 40px;
    background-color: ${theme.colors.yellow200};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${theme.font.semiBold};
    font-size: ${theme.font.sizes.large};
    text-align: center;
  `}
`
