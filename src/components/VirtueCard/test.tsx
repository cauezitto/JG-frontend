import { render, screen } from '@testing-library/react'

import VirtueCard from '.'

describe('<VirtueCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<VirtueCard />)

    expect(screen.getByRole('heading', { name: /VirtueCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
