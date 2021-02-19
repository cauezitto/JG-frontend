import { Story, Meta } from '@storybook/react/types-6-0'
import MenuMobile from '.'

export default {
  title: 'MenuMobile',
  component: MenuMobile
} as Meta

export const Default: Story = (args) => <MenuMobile {...args} />
