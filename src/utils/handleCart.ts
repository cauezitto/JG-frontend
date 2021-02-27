import CartProps from 'types/CartProps'
const CART_KEY = '@lojinhaShoppingCart'

export default {
  getCart() {
    const productsString = localStorage.getItem(CART_KEY)
    if (!productsString) {
      return {
        products: [],
        total: 0
      }
    }
    const productsJson = this.jsonParseProducts(productsString)

    return productsJson
  },

  addToCart(cart: CartProps) {
    const productString = this.stringfyProducts(cart)
    localStorage.setItem(CART_KEY, productString)
  },

  stringfyProducts(products: CartProps) {
    return JSON.stringify(products)
  },

  jsonParseProducts(productsString: string) {
    return JSON.parse(productsString)
  }
}
