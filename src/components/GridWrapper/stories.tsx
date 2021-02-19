import { Story, Meta } from '@storybook/react/types-6-0'
import GridWrapper, { GridProps } from '.'

export default {
  title: 'GridWrapper',
  component: GridWrapper
} as Meta

export const Default: Story<GridProps> = (args) => <GridWrapper {...args} />
