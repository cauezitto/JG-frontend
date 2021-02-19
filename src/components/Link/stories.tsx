import { Story, Meta } from '@storybook/react/types-6-0'
import { deflate } from 'zlib'
import Link, { LinkProps } from '.'

export default {
  title: 'Link',
  component: Link
} as Meta

export const Default: Story<LinkProps> = (args) => <Link {...args} />

Default.args = {
  children: 'Telefone'
}
