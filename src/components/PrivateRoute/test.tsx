import { render, screen } from '@testing-library/react'

import PrivateRoute from '.'

describe('<PrivateRoute />', () => {
  it('should render the heading', () => {
    const { container } = render(<PrivateRoute />)

    expect(screen.getByRole('heading', { name: /PrivateRoute/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
