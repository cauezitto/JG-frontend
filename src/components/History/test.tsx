import { render, screen } from '@testing-library/react'

import History from '.'

describe('<History />', () => {
  it('should render the heading', () => {
    const { container } = render(<History />)

    expect(screen.getByRole('heading', { name: /History/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
