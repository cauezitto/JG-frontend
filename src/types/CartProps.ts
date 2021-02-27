import { ProductProps } from 'types/ProductProps'

interface Product extends ProductProps {
  quant: number
  size: string
  custom: {
    isCustom: boolean
    name?: string
    number?: number
  }
}

interface CartProps {
  products: Array<Product>
  total: number
}

export default CartProps
