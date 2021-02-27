import styled, { css } from 'styled-components'
import { Props } from 'templates/dashboard'

const Container = styled.div<Props>`
  ${({ theme, paddingSmall }) => css`
    display: flex;
    width: 100%;
    min-height: 100vh;
    margin: auto;
    align-self: center;
    justify-self: center;
    justify-content: space-between;
    background: rgb(34, 40, 47);
    background: linear-gradient(
      180deg,
      rgba(34, 40, 47, 1) 7%,
      rgba(34, 40, 47, 0.6867121848739496) 48%,
      rgba(34, 40, 47, 1) 91%
    );
    padding: ${theme.spacings.xxsmall};

    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-height: 100%;
      height: auto;
      flex: 1;
      background-color: ${theme.colors.silver};
      border-radius: ${theme.border.radius.rounded};
      padding: ${theme.spacings.large} 15%;

      ${paddingSmall &&
      css`
        padding: ${theme.spacings.large} 5%;

        @media (min-width: 1445px) {
          padding: ${theme.spacings.large} 15%;
        }
      `}
    }

    .mobile {
      display: none;

      height: 60px;
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      flex-direction: column;
      padding: ${theme.spacings.small} 0 0 0;
      .desktop {
        display: none;
      }

      .mobile {
        display: unset;
      }
    }

    @media (max-width: ${theme.breakPoints.mobileL}) {
      .content {
        padding: ${theme.spacings.large} 5%;
      }
    }

    @media (max-width: ${theme.breakPoints.mobileS}) {
      .content {
        padding: ${theme.spacings.large} ${theme.spacings.xxsmall};
      }
    }
  `}
`

export default Container
