import { Story, Meta } from '@storybook/react/types-6-0'
import ShadowBox, { Props } from '.'

export default {
  title: 'ShadowBox',
  component: ShadowBox
} as Meta

export const Default: Story<Props> = (args) => <ShadowBox {...args} />
