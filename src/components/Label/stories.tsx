import { Story, Meta } from '@storybook/react/types-6-0'
import Label, { Props } from '.'

export default {
  title: 'Label',
  component: Label
} as Meta

export const Default: Story<Props> = (args) => <Label {...args} />

Default.args = {
  children: 'Nome:'
}
