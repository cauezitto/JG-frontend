import { gql } from '@apollo/client'

export const getCategorias = gql`
  query getCategorias {
    categorias {
      nome
    }
    marcas {
      nome
    }
  }
`
