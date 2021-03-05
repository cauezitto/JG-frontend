import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { CategorieFragment } from 'graphql/fragments/categories'
import { ProductFragment } from 'graphql/fragments/products'

export const getAllProducts = gql`
  query getAllProducts {
    produtos {
      id
      slug
    }
  }
`
export const getProductBySlug = gql`
  query GetProductBySlug($slug: String!) {
    produtos(where: { slug: $slug }) {
      id
      resumo
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
          id
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

export const FilterProducts = gql`
  fragment ProductFragment on Produto {
    id
    slug
    nome
    preco
    cover {
      url
    }
    categorias {
      nome
    }
    marca {
      nome
    }
  }

  fragment CategoriesFragment on Categoria {
    nome
  }

  fragment BrandsFragment on Marca {
    nome
  }

  query FilterProducts($limit: Int!, $start: Int, $where: JSON) {
    produtos(limit: $limit, start: $start, where: $where) {
      ...ProductFragment
    }
    categorias {
      ...CategoriesFragment
    }
    marcas {
      ...BrandsFragment
    }
    produtosConnection(where: $where) {
      values {
        id
      }
    }
  }
`

export function useQueryProducts(options: QueryHookOptions) {
  return useQuery(FilterProducts, options)
}
