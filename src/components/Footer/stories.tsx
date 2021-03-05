import { Story, Meta } from '@storybook/react/types-6-0'
import Footer, { FooterProps } from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Default: Story<FooterProps> = (args) => <Footer {...args} />

Default.args = {
  categorias: []
}
