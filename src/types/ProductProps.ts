export type ProductProps = {
  id: number
  nome: string
  preco: number
  slug: string
  isFavorite?: boolean
  kid: boolean
  galery: Array<{
    url: string
  }>
  cover: {
    url: string
  }
  tamanho: {
    adulto: {
      P: boolean
      M: boolean
      G: boolean
      GG: boolean
    }
    kid: {
      catorze: boolean
      dezesseis: boolean
      dezoito: boolean
      vinte: boolean
      vinte_e_dois: boolean
      vinte_e_quatro: boolean
      vinte_e_seis: boolean
      vinte_e_oito: boolean
    }
  }
}
