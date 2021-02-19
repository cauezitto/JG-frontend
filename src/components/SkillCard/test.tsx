import { render, screen } from '@testing-library/react'

import SkillCard from '.'

describe('<SkillCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<SkillCard />)

    expect(screen.getByRole('heading', { name: /SkillCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
