import { useState } from 'react'
import { TbPokeball } from 'react-icons/tb'

import Loader from '../components/Loader'
import Pagination from '../components/Pagination'
import PokemonCard from '../components/PokemonCard'
import CardSkeleton from '../components/PokemonCard/CardSkeleton'
import SEO from '../components/SEO'
import usePokemonList from '../services/hooks/usePokemonList'

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
          {isFetching && <Loader />}
        </h1>

        {data?.results.length && !isLoading ? (
          <>
            <ul className={styles.list}>
              {data.results.map((pokemon) => (
                <li key={pokemon.name}>
                  <PokemonCard pokemon={pokemon} />
                </li>
              ))}
            </ul>

            <Pagination
              totalCountOfRegister={data.count}
              currentPage={page}
              registersPerPage={60}
              onPageChange={setPage}
            />
          </>
        ) : (
          <ul className={styles.list}>
            {[...Array(18)].map((_, e) => (
              <li key={e}>
                <CardSkeleton />
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  )
}
