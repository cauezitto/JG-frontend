import styled, { css } from 'styled-components'
const Favoritos = styled.div`
  ${({ theme }) => css`
    .mobile {
      display: none;
    }

    .hidden {
      margin-left: -100%;
      transition: all 0.8s ease;
      margin-right: -100%;
    }

    .list-container {
      transition: all 0.8s ease;
      position: fixed;
      z-index: 10;
      right: 0;
      top: 10px;
    }
    .drop-list {
      position: fixed;
      right: 10%;
      bottom: 50vh;
      background-color: ${theme.colors.red100};
      width: 80px;
      height: 50px;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: ${theme.font.sizes.extra};
      color: ${theme.colors.white100};
      z-index: 5;
    }
    .share-wrapper {
      display: flex;
      flex-direction: column;
      width: 600px;
      margin: 100px auto;
      align-items: center;
      justify-content: center;
      h2 {
        text-align: center;
      }

      .copy {
        font-size: ${theme.font.sizes.xlarge};
        margin-left: ${theme.spacings.xxsmall};
        cursor: pointer;
      }

      .options {
        display: flex;
        width: 400px;
        justify-content: space-between;
        margin-top: ${theme.spacings.small};

        a {
          text-decoration: none;
        }

        .facebook {
          background-color: #3b5998;
        }
        .twitter {
          background-color: #1da1f2;
        }
        .whatsapp {
          background-color: #4dc247;
        }
        .plus {
          background-color: #ff6550;
        }
      }

      .option {
        display: flex;
        align-items: center;
        padding: 10px 15px;
        white-space: nowrap;
        color: ${theme.colors.white100};
      }
    }

    .space-between {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      .share-wrapper {
        width: 100%;
      }

      .list-container {
        top: 0;
        width: 100%;
      }

      .drop-list {
        bottom: 50px;
      }

      .desktop {
        display: none;
      }

      .mobile {
        display: unset;
      }
    }
  `}
`

export default Favoritos
