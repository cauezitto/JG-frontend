import { render, screen } from '@testing-library/react'

import FriendsList from '.'

describe('<FriendsList />', () => {
  it('should render the heading', () => {
    const { container } = render(<FriendsList />)

    expect(screen.getByRole('heading', { name: /FriendsList/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
