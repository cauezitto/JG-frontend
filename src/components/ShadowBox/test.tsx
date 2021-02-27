import { render, screen } from '@testing-library/react'

import ShadowBox from '.'

describe('<ShadowBox />', () => {
  it('should render the heading', () => {
    const { container } = render(<ShadowBox />)

    expect(screen.getByRole('heading', { name: /ShadowBox/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
