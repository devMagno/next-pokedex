import { useQuery } from 'react-query'

import { GetPokemonListResponse, Pokemon } from '../../types/pokemon'
import api from '../axios'

const staleTime = 1000 * 60 * 10 // 10 minutes

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

async function getPokemon(name: string): Promise<Pokemon> {
  const { data } = await api.get<Pokemon>(`pokemon/${name}`)

  return data
}

export function usePokemonList(page: number, limit: number) {
  return useQuery(['pokemonList', page], () => getPokemonList(page, limit), {
    staleTime,
  })
}

export function usePokemon(name: string) {
  return useQuery(['pokemon', name], () => getPokemon(name), {
    staleTime,
  })
}
