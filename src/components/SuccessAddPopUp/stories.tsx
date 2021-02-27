import { Story, Meta } from '@storybook/react/types-6-0'
import SuccessAddPopUp, { Props } from '.'

export default {
  title: 'SuccessAddPopUp',
  component: SuccessAddPopUp
} as Meta

export const Default: Story<Props> = (args) => <SuccessAddPopUp {...args} />
