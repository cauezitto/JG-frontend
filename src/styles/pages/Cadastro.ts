import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
  input, button{
    outline: 0;
  }
    .sub-container {
      display: flex;
      width: 100%;
      max-width: 1600px;
      height: 100vh;
      max-height: 850px;
      margin: auto;
      align-self: center;
      justify-self: center;
      justify-content: space-between;
    }

    .go2login {
      display: flex;
      min-height: 100%;
      width: 40%;
      padding: ${theme.spacings.small} ${theme.spacings.xlarge};
      /* border: 1px solid; */
      justify-content: center;

      .content {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        /* border: 1px solid; */

        button {
          border-radius: 50px;
        }
      }

      .text-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        a{
          text-decoration: none;
        }
      }
    }

    .register-wrapper {
      height: 100%;
      flex: 1;
      background: rgb(177,131,50);
      background: linear-gradient(180deg, rgba(177,131,50,1) 7%, rgba(177,131,50,0.5746673669467788) 48%, rgba(177,131,50,1) 91%);
      padding: ${theme.spacings.xxgiant} ${theme.spacings.xxxgiant};
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      justify-content: flex-start;
      align-items: flex-start;
      grid-template-areas:
        'title title'
        /* 'icons icons'
        'text text' */
        '. .'
        '. .'
        'name name'
        'email phone'
        'address number'
        'street street'
        'password password'
        '. .'
        'send send';

        input{
          width: 100%;
        }

      .title {
        grid-area: title;
      }

      .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-area: icons;

        .icon-wrapper {
          display: none;
          justify-content: center;
          align-items: center;
          color: ${theme.colors.white100};
          margin: ${theme.spacings.xsmall};
          font-size: ${theme.font.sizes.xxlarge};
          border: 2px solid ${theme.colors.white100};
          height: 50px;
          width: 50px;
          border-radius: 50%;
          cursor: pointer;
        }
      }

      input {
        margin-top: 10px;
      }

      .text {
        display: none;
        grid-area: text;
      }

      .name {
        grid-area: name;
        padding: 0 ${theme.spacings.large};
      }

      .street {
        grid-area: street;
        padding: 0 ${theme.spacings.large};
      }

      .state {
        grid-area: state;
        padding: 0 ${theme.spacings.large} 0 0;
      }

      .city {
        grid-area: city;
        padding: 0 ${theme.spacings.large} 0 0;
      }

      .neighborhood {
        grid-area: neighborhood;
        padding: 0 0 0 ${theme.spacings.large};
      }

      .number {
        grid-area: number;
        padding: 0 ${theme.spacings.large} 0 0;
      }

      .email {
        grid-area: email;
        padding: 0 0 0 ${theme.spacings.large};
      }

      .phone {
        grid-area: phone;
        padding: 0 ${theme.spacings.large} 0 0;
      }

      .address {
        grid-area: address;
        padding: 0 0 0 ${theme.spacings.large};
      }

      .password {
        grid-area: password;
        padding: 0 ${theme.spacings.large};
      }

      .send {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-area: send;

        button{
          width: 60%;
          border-radius: 50px:
        }
      }
    }

    .go2login-mobile{
      display: none;
      /* position: fixed; */
      top: 0;
      width: 100%;
      text-align: center;
      padding: ${theme.spacings.xsmall};
      background-color: ${theme.colors.silver};
      font-size: ${theme.font.sizes.xlarge};
      font-family: ${theme.font.family.ubuntu};
      border-radius: 0 0 20px 20px;
    }

    @media (min-width: 1600px){

      flex: 1;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${theme.colors.white100};

      .register-wrapper{
        border-radius: 0 50px 50px 0;
      }

      .go2login{
        background-color: ${theme.colors.silver};
        border-radius: 50px 0 0 50px;
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}){
      .sub-container{
        flex-direction: column;
      }

      .go2login{
        display: none;
      }

      .go2login-mobile-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.brown};
        width: 100%;

        a{
          color: ${theme.colors.black};
          font-weight: bold;
        }
      }

      .go2login-mobile{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .register-wrapper{
        height: auto;
        grid-template-areas:
        'title title'
        /* 'icons icons'
        'text text' */
        'name name'
        'email email'
        'phone phone'
        'address number'
        'street street'
        'password password'
        '. .'
        '. .'
        'send send';

        gap: 5px;

        padding: ${theme.spacings.xsmall};
       .title h2{
          font-size: ${theme.font.sizes.extra};
        }


      .name {
        grid-area: name;
        padding: 0;
      }

      .email {
        grid-area: email;
        padding: 0;
      }

      .phone {
        grid-area: phone;
        padding: 0;
      }

      .address {
        grid-area: address;
        padding: 0;
      }
      .street, .city, .state, .neighborhood, .number{
        padding: 0;
      }

      .password {
        grid-area: password;
        padding: 0;
      }

      .send {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-area: send;
      }
      }
    }

    @media (max-width: ${theme.breakPoints.mobileL}){

    }
  `}
`

export default Container
