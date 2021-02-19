import { Story, Meta } from '@storybook/react/types-6-0'
import SkillCard, { SkillCardProps } from '.'

export default {
  title: 'SkillCard',
  component: SkillCard
} as Meta

export const Default: Story<SkillCardProps> = (args) => <SkillCard {...args} />

Default.args = {
  title: 'MISSÃO',
  text:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi temporibus placeat, recusandae quae cum voluptatum aut dolores sint iusto?',
  image: '/img/sobre/strategy.png',
  icon: '/img/sobre/target.png'
}
