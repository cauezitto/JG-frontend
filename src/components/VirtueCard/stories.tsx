import { Story, Meta } from '@storybook/react/types-6-0'
import VirtueCard, { VirtueCardProps } from '.'

export default {
  title: 'VirtueCard',
  component: VirtueCard
} as Meta

export const Default: Story<VirtueCardProps> = (args) => (
  <VirtueCard {...args} />
)

Default.args = {
  title: 'COMPROMETIMENTO',
  text:
    'Aqui o juiz da partida é sempre você! Queremos que sua experiência seja a melhor possível em nossa loja.'
}
