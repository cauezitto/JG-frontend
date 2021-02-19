import { render, screen } from '@testing-library/react'

import Brands from '.'

describe('<Brands />', () => {
  it('should render the heading', () => {
    const { container } = render(<Brands />)

    expect(screen.getByRole('heading', { name: /Brands/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
