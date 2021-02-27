import { render, screen } from '@testing-library/react'

import ProductGalery from '.'

describe('<ProductGalery />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProductGalery />)

    expect(screen.getByRole('heading', { name: /ProductGalery/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
