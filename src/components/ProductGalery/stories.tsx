import { Story, Meta } from '@storybook/react/types-6-0'
import ProductGalery, { GaleryProps } from '.'

export default {
  title: 'ProductGalery',
  component: ProductGalery
} as Meta

export const Default: Story<GaleryProps> = (args) => <ProductGalery {...args} />

Default.args = {
  images: [
    {
      url:
        '/uploads/medium_corta_vento_manchester_united_azul_19_201_8fc4d4d4cb6d57d13215717252787424_1024_1024_1024x1024_2x_df8d998c74.webp'
    },
    {
      url:
        '/uploads/medium_corta_vento_manchester_united_azul_19_201_8fc4d4d4cb6d57d13215717252787424_1024_1024_1024x1024_2x_df8d998c74.webp'
    },
    {
      url: '/uploads/eec011f0_1024x1024_2x_3089d31cc7.jpg'
    }
  ]
}
