import { render, screen } from '@testing-library/react'

import CheckBox from '.'

describe('<CheckBox />', () => {
  it('should render the heading', () => {
    const { container } = render(<CheckBox />)

    expect(screen.getByRole('heading', { name: /CheckBox/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
