import { render, screen } from '@testing-library/react'

import UnathorizedPopUp from '.'

describe('<UnathorizedPopUp />', () => {
  it('should render the heading', () => {
    const { container } = render(<UnathorizedPopUp />)

    expect(screen.getByRole('heading', { name: /UnathorizedPopUp/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
