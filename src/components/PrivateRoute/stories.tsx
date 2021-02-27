import { Story, Meta } from '@storybook/react/types-6-0'
import PrivateRoute from '.'

export default {
  title: 'PrivateRoute',
  component: PrivateRoute
} as Meta

export const Default: Story = () => <PrivateRoute />
