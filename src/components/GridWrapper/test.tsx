import { render, screen } from '@testing-library/react'

import GridWrapper from '.'

describe('<GridWrapper />', () => {
  it('should render the heading', () => {
    const { container } = render(<GridWrapper />)

    expect(screen.getByRole('heading', { name: /GridWrapper/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
