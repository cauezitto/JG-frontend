import { render, screen } from '@testing-library/react'

import Costumers from '.'

describe('<Costumers />', () => {
  it('should render the heading', () => {
    const { container } = render(<Costumers />)

    expect(screen.getByRole('heading', { name: /Costumers/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
