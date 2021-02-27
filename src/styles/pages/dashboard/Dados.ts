import styled, { css } from 'styled-components'
type ProfileProps = {
  url: string
}

export const Profile = styled.div<ProfileProps>`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  margin-top: 15px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
`

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    /* .profile {
      margin: 0 auto;
      width: 100px;
      height: 100px;
      margin-top: 15px;
      border-radius: 50%;
      background-image: url('/img/silvio.jpg');
      background-position: center;
      background-size: cover;
    } */

    .data-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'name name'
        'email phone'
        'address number'
        'street street'
        'neighborhood neighborhood'
        'city state'
        'password password';
      gap: 15px;
      width: 100%;

      margin-bottom: 20px;

      input{
        width: 100%;
      }

      .name {
        width: 100%;
        grid-area: name;
      }
      .email {
        width: 100%;
        grid-area: email;
      }
      .phone {
        width: 100%;
        grid-area: phone;
      }
      .address {
        width: 100%;
        grid-area: address;
      }
      .street {
        width: 100%;
        grid-area: street;
      }
      .neighborhood {
        width: 100%;
        grid-area: neighborhood;
      }
      .city {
        width: 100%;
        grid-area: city;
      }
      .state {
        width: 100%;
        grid-area: state;
      }
      .number {
        width: 100%;
        grid-area: number;
      }
      .password {
        width: 100%;
        grid-area: password;
      }

      input {
        margin-top: 10px;
        outline: 0;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      button {
        /* margin: 0 auto; */
        border-radius: 50px;
        width: 60%;
      }
    }

    @media (max-width: ${theme.breakPoints.mobileL}) {
      .data-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'name name'
        'email email'
        'phone phone'
        'address number'
        'street street'
        'password password';
    }
  `}
`

export default Container
