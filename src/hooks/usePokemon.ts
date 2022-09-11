import { useQuery } from 'react-query'

import api from '../services/axios'
import { Pokemon } from '../types/pokemon'

async function getPokemon(name: string): Promise<Pokemon> {
  const { data } = await api.get<Pokemon>(`pokemon/${name}`)

  return data
}

export default function usePokemon(name: string) {
  return useQuery(['pokemon', name], () => getPokemon(name), {
    staleTime: 1000 * 60 * 10,
  })
}
