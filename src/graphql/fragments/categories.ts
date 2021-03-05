import { gql } from '@apollo/client'

export const CategorieFragment = gql`
  fragment CategorieFragment on Categoria {
    nome
  }
`
