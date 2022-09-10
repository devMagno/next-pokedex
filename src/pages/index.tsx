import { useState } from 'react'
import { TbPokeball } from 'react-icons/tb'

import PokemonCard from '../components/PokemonCard'
import SEO from '../components/SEO'
import { usePokemonList } from '../services/hooks/usePokemon'

import styles from '../styles/Home.module.scss'

export default function Home() {
  const [page, setPage] = useState(1)

  const { data, isLoading, isFetching, error } = usePokemonList(page, 60)

  if (error)
    return <h1>Oops! Something went wrong... please try again later.</h1>

  return (
    <>
      <SEO
        title="Pokédex"
        description="Check out all the Pokémon in one place! Find your favorite and view its abilities, attributes, and more!"
      />

      <main className="main">
        <h1 className={styles.title}>
          <TbPokeball /> Pokédex
        </h1>

        {data?.results.length && (
          <ul className={styles.list}>
            {data.results.map((pokemon) => (
              <li key={pokemon.name}>
                <PokemonCard pokemon={pokemon} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  )
}
