export default {
  priceToNumber(priceString: string) {
    const price = priceString.replace('R$', '').replace(',', '.')
    const priceNumber = Number(price)
    return priceNumber
  },

  priceNumberToReadblePrice(valor: number) {
    const floatValor = valor?.toFixed(2).replace('.', ',')
    const readblePrice = `R$ ${floatValor}`
    return readblePrice
  },

  handleMultiplyPriceByQuantity(quant: number, price: string) {
    const numberPrice = this.priceToNumber(price)

    const total = numberPrice * quant

    const readblePrice = this.priceNumberToReadblePrice(total)

    return readblePrice
  }
}
