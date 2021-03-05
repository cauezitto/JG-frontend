import { gql } from '@apollo/client'

export const BrandFragment = gql`
  fragment BrandFragment on Categoria {
    nome
  }
`
