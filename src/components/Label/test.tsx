import { render, screen } from '@testing-library/react'

import Label from '.'

describe('<Label />', () => {
  it('should render the heading', () => {
    const { container } = render(<Label />)

    expect(screen.getByRole('heading', { name: /Label/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
