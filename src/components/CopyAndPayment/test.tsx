import { render, screen } from '@testing-library/react'

import CopyAndPayment from '.'

describe('<CopyAndPayment />', () => {
  it('should render the heading', () => {
    const { container } = render(<CopyAndPayment />)

    expect(screen.getByRole('heading', { name: /CopyAndPayment/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
