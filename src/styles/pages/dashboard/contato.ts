import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: auto;
  min-width: 100%;

  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    text-align: center;
  }

  label {
    width: 100%;
    max-width: 1000px;
    justify-self: center;
  }

  button {
    width: 300px;
    border-radius: 50px;
  }
`

export default Container
