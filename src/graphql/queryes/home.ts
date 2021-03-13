import { gql } from '@apollo/client'

export const homeQuery = gql`
  query getHomeData {
    depoimentos {
      nome
      depoimento
      foto {
        url
      }
    }
    categorias {
      nome
    }
    destaque {
      produtos {
        produto {
          id
          nome
          preco
          slug
          cover {
            url
          }
        }
      }
      marcas {
        logo {
          url
          alternativeText
        }
      }
    }
  }
`
