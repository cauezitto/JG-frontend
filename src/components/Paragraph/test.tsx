import { render, screen } from '@testing-library/react'

import Paragraph from '.'

describe('<Paragraph />', () => {
  it('should render the heading', () => {
    const { container } = render(<Paragraph />)

    expect(screen.getByRole('heading', { name: /Paragraph/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
