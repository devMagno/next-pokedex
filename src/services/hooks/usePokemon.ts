import { useQuery } from 'react-query'

import { Pokemon } from '../../types/pokemon'
import api from '../axios'

async function getPokemon(name: string): Promise<Pokemon> {
  const { data } = await api.get<Pokemon>(`pokemon/${name}`)

  return data
}

export default function usePokemon(name: string) {
  return useQuery(['pokemon', name], () => getPokemon(name), {
    staleTime: 1000 * 60 * 10,
  })
}
