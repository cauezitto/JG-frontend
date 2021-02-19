import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 7%,
      rgba(23, 27, 32, 1) 18%,
      rgba(34, 40, 47, 0.865983893557423) 85%
    );
    padding: ${theme.spacings.small} 0;
  `}
`

export const MailForm = styled.form`
  ${({ theme }) => css`
    /* border: 1px solid red; */
    width: 100%;
    display: grid;
    gap: ${theme.spacings.xsmall};
    grid-template-columns: 0.8fr 1.3fr 0.4fr;
    grid-template-rows: 40px;
    margin-top: ${theme.spacings.small};

    .center {
      /* display: flex; */
      align-items: center;
      justify-content: center;
      justify-items: stretch;
    }

    input {
      width: 100%;
      /* max-width: 300px; */
    }

    button {
      width: 100%;
    }
  `}
`

export const NavsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${theme.breakPoints.tablet}) {
      align-items: center;
      flex-direction: column;
    }
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: flex-start; */
    text-align: center;
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const NavigationLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white100};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} 0;
    text-decoration: none;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    cursor: pointer;

    svg {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export const SocialMediaContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    padding-bottom: ${theme.spacings.small};
    position: relative;
    margin-bottom: ${theme.spacings.xsmall};

    &::after {
      width: 100%;
      position: absolute;
      border: 1px solid ${theme.colors.brown};
      content: ' ';
      bottom: 0;
    }
    .social-media {
      border: 2px ${theme.colors.white100} solid;
      height: 50px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`
