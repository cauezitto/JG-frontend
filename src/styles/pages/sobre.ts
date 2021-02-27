import styled, { css } from 'styled-components'

export const SkillCardsWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${theme.breakPoints.tablet}) {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  `}
`

export const VirtuesWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: ${theme.breakPoints.tablet}) {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  `}
`
export const Go2Contact = styled.section`
  ${({ theme }) => css`
    background-image: url('/img/sobre/go2contact.png');
    height: 400px;
    background-size: cover;
    /* background-position: center; */
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.giant};

    a {
      text-decoration: none;
    }

    @media (max-width: ${theme.breakPoints.mobileL}) {
      background-position-x: center;
    }
  `}
`
