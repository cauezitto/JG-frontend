import { gql } from '@apollo/client'
export const getTermos = gql`
  query getTermos {
    termo {
      texto
    }
    categorias {
      nome
    }
    marcas {
      nome
    }
  }
`
