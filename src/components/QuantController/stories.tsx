import { Story, Meta } from '@storybook/react/types-6-0'
import QuantController, { Props } from '.'

export default {
  title: 'QuantController',
  component: QuantController
} as Meta

export const Default: Story<Props> = (args) => <QuantController {...args} />
