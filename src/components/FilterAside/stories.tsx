import { Story, Meta } from '@storybook/react/types-6-0'
import FilterAside, { FilteredAsidProps } from '.'

export default {
  title: 'FilterAside',
  component: FilterAside
} as Meta

export const Default: Story<FilteredAsidProps> = (args) => (
  <FilterAside {...args} />
)

Default.args = {
  categorias: [
    {
      nome: 'time nacional'
    },
    {
      nome: 'time europeu'
    },
    {
      nome: 'feminino'
    },
    {
      nome: 'Agasalho'
    }
  ],
  marcas: [
    {
      nome: 'NBA'
    },
    {
      nome: 'NIKE'
    },
    {
      nome: 'adidas'
    }
  ]
}
