import { Story, Meta } from '@storybook/react/types-6-0'
import ContactForm from '.'

export default {
  title: 'ContactForm',
  component: ContactForm
} as Meta

export const Default: Story = () => <ContactForm />
