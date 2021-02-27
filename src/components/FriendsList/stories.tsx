import { Story, Meta } from '@storybook/react/types-6-0'
import FriendsList from '.'
import { Props } from '.'

export default {
  title: 'FriendsList',
  component: FriendsList
} as Meta

export const Default: Story<Props> = (args) => <FriendsList {...args} />
