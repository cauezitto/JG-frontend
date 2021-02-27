import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    .sub-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 1600px;
      height: 100vh;
      max-height: 850px;
      margin: auto;
      align-self: center;
      justify-self: center;
      /* border: 1px solid red; */
    }
    .subscribe-wrapper {
      height: 100%;
      display: grid;
      flex: 1;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        'logo logo'
        'people subscribe'
        '. .';
      padding: ${theme.spacings.small};

      .logo {
        grid-area: logo;
        height: 100px;
      }

      .people {
        grid-area: people;

        img {
          width: 80%;
        }
      }
      .subscribe {
        grid-area: subscribe;
        /* display: flex;
        flex-direction: column;
        justify-content: right;
        text-align: ; */
      }
    }

    .form-wrapper {
      padding: 0 ${theme.spacings.medium};
      height: 100%;
      width: 450px;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 7%,
        rgba(23, 27, 32, 1) 18%,
        rgba(34, 40, 47, 0.865983893557423) 85%
      );
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .logo {
        position: absolute;
        top: 20px;
        right: 10px;
        width: 100px;
      }

      .send button {
        width: 100%;
        height: 50px;
        /* font-weight: ${theme.font.bold}; */
      }

      input,
      button {
        box-shadow: ${theme.boxShadow};
        outline: 0;
      }

      form {
        width: 100%;
        height: 400px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
          'login login'
          'password password'
          'remenber forgeted'
          'send send';

        .login {
          grid-area: login;
        }
        .password {
          grid-area: password;
        }
        .remenber {
          grid-area: remenber;
          display: flex;
          align-items: flex-start;

          color: ${theme.colors.white100};
          font-family: ${theme.font.family.ubuntu};

          input {
            border: 0;
            margin: 0;
            padding: 0;
            cursor: pointer;
          }
        }
        .forgeted {
          display: flex;
          grid-area: forgeted;
          justify-content: flex-end;
          align-items: flex-start;
          text-align: right;
        }
        .send {
          grid-area: send;
        }
      }
    }

    .subscribe-mobile {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      padding: ${theme.spacings.xsmall};
      background-color: ${theme.colors.silver};
      font-size: ${theme.font.sizes.xlarge};
      font-family: ${theme.font.family.ubuntu};
      border-radius: 20px 20px 0 0;
    }

    @media (min-width: 1600px) {
      flex: 1;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${theme.colors.white100};

      .form-wrapper {
        border-radius: 0 50px 50px 0;
      }

      .subscribe-wrapper {
        border-radius: 50px 0 0 50px;
        background-color: ${theme.colors.silver};
        padding: ${theme.spacings.xgiant};
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      .sub-wrapper {
        flex-direction: column;
        justify-content: flex-start;
      }
      .subscribe-wrapper {
        display: none;
      }
      .subscribe-mobile {
        display: flex;
        justify-content: center;
      }
      .form-wrapper {
        width: 100%;
        padding: ${theme.spacings.large};

        form {
          height: 400px;
        }

        button,
        label input {
          height: 60px;
        }
      }
    }
  `}
`

export default Container
