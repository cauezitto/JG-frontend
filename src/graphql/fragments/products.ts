import { gql } from '@apollo/client'

export const ProductFragment = gql`
  fragment ProductFragment on Produto {
    id
    slug
    nome
    preco
    categorias {
      nome
    }
    marca {
      nome
    }
  }
`
