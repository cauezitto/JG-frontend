import { render, screen } from '@testing-library/react'

import FilterAside from '.'

describe('<FilterAside />', () => {
  it('should render the heading', () => {
    const { container } = render(<FilterAside />)

    expect(screen.getByRole('heading', { name: /FilterAside/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
