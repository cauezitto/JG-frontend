import { Story, Meta } from '@storybook/react/types-6-0'
import MenuMobile, { HeaderProps } from '.'

export default {
  title: 'MenuMobile',
  component: MenuMobile
} as Meta

export const Default: Story<HeaderProps> = (args) => <MenuMobile {...args} />

Default.args = {
  categorias: []
}
