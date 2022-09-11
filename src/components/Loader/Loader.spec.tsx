import { render, screen } from '@testing-library/react'

import Loader from '.'

describe('Loader component', () => {
  it('renders correctly', () => {
    render(<Loader />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})
