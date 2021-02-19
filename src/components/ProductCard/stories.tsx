import { Story, Meta } from '@storybook/react/types-6-0'
import ProductCard, { ProductProps } from '.'

export default {
  title: 'ProductCard',
  component: ProductCard
} as Meta

export const Default: Story<ProductProps> = (args) => <ProductCard {...args} />

Default.args = {
  image:
    'https://static.netshoes.com.br/produtos/camisa-flamengo-new-ray/06/D40-1812-006/D40-1812-006_zoom2.jpg?ts=1594417336&ims=326x',
  name: 'Camisa Flamengo New Ray',
  price: 180,
  isFavorite: false
}
