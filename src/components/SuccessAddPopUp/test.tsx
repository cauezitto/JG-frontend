import { render, screen } from '@testing-library/react'

import SuccessAddPopUp from '.'

describe('<SuccessAddPopUp />', () => {
  it('should render the heading', () => {
    const { container } = render(<SuccessAddPopUp />)

    expect(screen.getByRole('heading', { name: /SuccessAddPopUp/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
