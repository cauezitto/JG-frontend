import { render, screen } from '@testing-library/react'

import Options from '.'

describe('<Options />', () => {
  it('should render the heading', () => {
    const { container } = render(<Options />)

    expect(screen.getByRole('heading', { name: /Options/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
