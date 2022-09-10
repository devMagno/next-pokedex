import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import api from '../../services/axios'
import { GetPokemonListResponse, Pokemon } from '../../types/pokemon'

interface PokemonPageProps {
  pokemon: Pokemon
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<GetPokemonListResponse>('pokemon?limit=60')
  const paths = data.results.map((_, index) => ({
    params: { id: String(index + 1) },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as ParsedUrlQuery

  const { data: pokemon } = await api.get<Pokemon>(`pokemon/${id}`)

  return {
    props: { pokemon },
  }
}

export default function PokemonPage({ pokemon }: PokemonPageProps) {
  return <h1>{pokemon.name}</h1>
}
