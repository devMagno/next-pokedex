import { useQuery } from 'react-query'

import { GetPokemonListResponse } from '../../types/pokemon'
import api from '../axios'

async function getPokemonList(
  page: number,
  limit: number,
): Promise<GetPokemonListResponse> {
  const offset = (page - 1) * limit
  const { data } = await api.get<GetPokemonListResponse>(
    `pokemon?limit=${limit}&offset=${offset}`,
  )

  return data
}

export default function usePokemonList(page: number, limit: number) {
  return useQuery(['pokemonList', page], () => getPokemonList(page, limit), {
    staleTime: 1000 * 60 * 10,
  })
}
