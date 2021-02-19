import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://www.splitconfort.com.br/sobre.svg',
    title: 'FALE CONOSCO',
    description: 'Atendimento 24h por dia!'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />
