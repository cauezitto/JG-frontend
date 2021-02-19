import { render, screen } from '@testing-library/react'

import MenuMobile from '.'

describe('<MenuMobile />', () => {
  it('should render the heading', () => {
    const { container } = render(<MenuMobile />)

    expect(screen.getByRole('heading', { name: /MenuMobile/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
