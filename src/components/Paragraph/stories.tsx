import { Story, Meta } from '@storybook/react/types-6-0'
import Paragraph, { Props } from '.'

export default {
  title: 'Paragraph',
  component: Paragraph
} as Meta

export const Default: Story<Props> = (args) => <Paragraph {...args} />

Default.args = {
  children: 'Preencha o formulário abaixo e entre em contato conosco'
}
