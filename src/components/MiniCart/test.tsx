import { render, screen } from '@testing-library/react'

import MiniCart from '.'

describe('<MiniCart />', () => {
  it('should render the heading', () => {
    const { container } = render(<MiniCart />)

    expect(screen.getByRole('heading', { name: /MiniCart/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
