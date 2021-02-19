import { Story, Meta } from '@storybook/react/types-6-0'
import PaymentsBanner from '.'

export default {
  title: 'PaymentsBanner',
  component: PaymentsBanner
} as Meta

export const Default: Story = () => <PaymentsBanner />
