import { gql } from '@apollo/client'

export const getProductBySlug = gql`
  query GetProductBySlug($slug: String!) {
    produtos(where: { slug: $slug }) {
      id
      nome
      preco
      descricao
      kid
      slug
      cover {
        url
      }
      tamanho {
        adulto {
          P
          M
          G
          GG
        }
        kid {
          catorze
          dezesseis
          dezoito
          vinte
          vinte_e_dois
          vinte_e_quatro
          vinte_e_seis
          vinte_e_oito
        }
      }
      galeria {
        url
      }
    }
  }
`

export const getTierProducts = gql`
  query QUERY_DESTAQUES {
    destaque {
      produtos {
        produto {
          nome
          preco
          slug
          cover {
            url
          }
        }
      }
    }
  }
`
