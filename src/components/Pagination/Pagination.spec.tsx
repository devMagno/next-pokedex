import { fireEvent, render, screen } from '@testing-library/react'

import Pagination from '.'

describe('Pagination component', () => {
  it('renders correctly', () => {
    render(
      <Pagination
        currentPage={1}
        registersPerPage={10}
        totalCountOfRegister={100}
        onPageChange={() => null}
      />,
    )

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('changes current page on item click', () => {
    const onPageChange = jest.fn()

    render(
      <Pagination
        currentPage={1}
        registersPerPage={10}
        totalCountOfRegister={100}
        onPageChange={onPageChange}
      />,
    )

    const secondPageButton = screen.getByText('2')
    fireEvent.click(secondPageButton)

    expect(onPageChange).toHaveBeenCalledWith(2)
  })
})
