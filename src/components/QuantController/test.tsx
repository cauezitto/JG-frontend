import { render, screen } from '@testing-library/react'

import QuantController from '.'

describe('<QuantController />', () => {
  it('should render the heading', () => {
    const { container } = render(<QuantController />)

    expect(screen.getByRole('heading', { name: /QuantController/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
