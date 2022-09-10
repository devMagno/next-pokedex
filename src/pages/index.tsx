import { GetStaticProps } from 'next'

import SEO from '../components/SEO'
import api from '../services/api'
import { GetPokemonListResponse } from '../types/pokemon'

import styles from '../styles/Home.module.scss'

interface HomeProps {
  data: GetPokemonListResponse
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<GetPokemonListResponse>(`pokemon?limit=60`)

  return {
    props: { data },
  }
}

export default function Home({ data }: HomeProps) {
  console.log(data)

  return (
    <>
      <SEO
        title="Pokédex"
        description="Check out all the Pokémon in one place! Find your favorite and view its abilities, attributes, and more!"
      />

      <main className={styles.main}>
        <h1 className={styles.title}>Hello World!</h1>
      </main>
    </>
  )
}
