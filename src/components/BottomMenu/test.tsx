import { render, screen } from '@testing-library/react'

import BottomMenu from '.'

describe('<BottomMenu />', () => {
  it('should render the heading', () => {
    const { container } = render(<BottomMenu />)

    expect(screen.getByRole('heading', { name: /BottomMenu/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
