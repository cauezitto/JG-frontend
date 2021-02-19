import { render, screen } from '@testing-library/react'

import PaymentsBanner from '.'

describe('<PaymentsBanner />', () => {
  it('should render the heading', () => {
    const { container } = render(<PaymentsBanner />)

    expect(screen.getByRole('heading', { name: /PaymentsBanner/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
