import { render, screen, waitFor } from '@testing-library/react'

import Home from '../../pages'
import usePokemonList from '../../services/hooks/usePokemonList'

jest.mock('../../services/hooks/usePokemonList')

describe('Home page', () => {
  it('renders correctly', async () => {
    const usePokemonListMocked = jest.mocked(usePokemonList)

    usePokemonListMocked.mockResolvedValueOnce({
      data: {
        count: 3,
        results: [
          {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
          },
          {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon/2/',
          },
          {
            name: 'venusaur',
            url: 'https://pokeapi.co/api/v2/pokemon/3/',
          },
        ],
      },
      isLoading: false,
      error: false,
    } as never)

    render(<Home />)

    await waitFor(() => expect(screen.getByText('Pokédex')).toBeInTheDocument())
  })
})
