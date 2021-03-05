import { Story, Meta } from '@storybook/react/types-6-0'
import Brands, { BrandsProps } from '.'

export default {
  title: 'Brands',
  component: Brands
} as Meta

export const Default: Story<BrandsProps> = (args) => <Brands {...args} />

Default.args = {
  brands: [
    {
      url: 'https://logodownload.org/wp-content/uploads/2016/11/nba-logo-1.png',
      alternativeText: 'nike'
    },
    {
      url: 'https://logodownload.org/wp-content/uploads/2016/11/nba-logo-1.png',
      alternativeText: 'nike'
    },
    {
      url: 'https://logodownload.org/wp-content/uploads/2016/11/nba-logo-1.png',
      alternativeText: 'nike'
    },
    {
      url: 'https://logodownload.org/wp-content/uploads/2016/11/nba-logo-1.png',
      alternativeText: 'nike'
    },
    {
      url: 'https://logodownload.org/wp-content/uploads/2016/11/nba-logo-1.png',
      alternativeText: 'nike'
    },
    {
      url: 'https://logodownload.org/wp-content/uploads/2016/11/nba-logo-1.png',
      alternativeText: 'nike'
    },
    {
      url: 'https://logodownload.org/wp-content/uploads/2016/11/nba-logo-1.png',
      alternativeText: 'nike'
    },
    {
      url: 'https://logodownload.org/wp-content/uploads/2016/11/nba-logo-1.png',
      alternativeText: 'nike'
    }
  ]
}
