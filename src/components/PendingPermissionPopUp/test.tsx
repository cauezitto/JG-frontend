import { render, screen } from '@testing-library/react'

import PendingPermissionPopUp from '.'

describe('<PendingPermissionPopUp />', () => {
  it('should render the heading', () => {
    const { container } = render(<PendingPermissionPopUp />)

    expect(screen.getByRole('heading', { name: /PendingPermissionPopUp/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
