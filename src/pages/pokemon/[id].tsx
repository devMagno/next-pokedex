import { BsArrowLeft, BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { RiRulerLine, RiScales2Line } from 'react-icons/ri'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

import Loader from '../../components/Loader'
import SEO from '../../components/SEO'
import renderAbilityName from '../../helpers/renderAbilityName'
import renderId from '../../helpers/renderId'
import renderStatName from '../../helpers/renderStatName'
import api from '../../services/axios'
import { GetPokemonListResponse, Pokemon } from '../../types/pokemon'

import styles from './Pokemon.module.scss'

interface PokemonPageProps {
  pokemon: Pokemon
  count: number
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<GetPokemonListResponse>('pokemon?limit=120')
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
  const { data: listData } = await api.get<GetPokemonListResponse>(`pokemon`)

  const { count } = listData

  return {
    props: { pokemon, count },
  }
}

export default function PokemonPage({ pokemon, count }: PokemonPageProps) {
  const { isFallback } = useRouter()

  if (isFallback)
    return (
      <main className={`main ${styles.fallback}`}>
        <Loader width="40px" height="40px" />
      </main>
    )

  return (
    <>
      <SEO
        title={`Pokédex | 
        ${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)} 
        #${renderId(String(pokemon.id))}`}
        description={`
        ${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}
        is a ${pokemon.types[0].type.name} type pokémon.`}
      />

      <div className={`${styles.wrapper} ${pokemon.types[0].type.name}`}>
        <main className={`main ${styles.main} `}>
          <header className={styles.header}>
            <div className={styles.title}>
              <Link href="/">
                <a title="Go back" className={styles.goBack}>
                  <BsArrowLeft />
                  <span className="sr-only">Go back</span>
                </a>
              </Link>

              <h1>{pokemon.name}</h1>
            </div>

            <span className={styles.id}>#{renderId(String(pokemon.id))}</span>
          </header>
          <div className={styles.content}>
            <section>
              <div className={styles.imageWrapper}>
                <Link href={`/pokemon/${pokemon.id - 1}`}>
                  <a
                    className={`${styles.prev} ${
                      pokemon.id <= 1 ? styles.hidden : ''
                    }`}
                    title={`Go to Pokémon #${pokemon.id - 1}`}
                  >
                    <BsChevronLeft />

                    <span className="sr-only">
                      Go to Pokémon #{pokemon.id - 1}
                    </span>
                  </a>
                </Link>

                <Image
                  width={200}
                  height={200}
                  alt={pokemon.name}
                  title={pokemon.name}
                  src={pokemon.sprites.front_default}
                />

                <Link href={`/pokemon/${pokemon.id + 1}`}>
                  <a
                    className={`${styles.next} ${
                      pokemon.id >= count ? styles.hidden : ''
                    }`}
                    title={`Go to Pokémon #${pokemon.id + 1}`}
                  >
                    <BsChevronRight />

                    <span className="sr-only">
                      Go to Pokémon #{pokemon.id + 1}
                    </span>
                  </a>
                </Link>
              </div>

              <ul className={styles.types}>
                {pokemon.types.map(({ type }) => (
                  <li key={type.name} className={type.name}>
                    {type.name}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className={styles.contentTitle}>About</h2>
              <ul className={styles.info}>
                {!!pokemon.weight && (
                  <li>
                    <p>
                      <RiScales2Line /> {pokemon.weight / 10} kg
                      <span>Weight</span>
                    </p>
                  </li>
                )}

                {!!pokemon.height && (
                  <li>
                    <p>
                      <RiRulerLine /> {pokemon.height / 10} m{' '}
                      <span>Height</span>
                    </p>
                  </li>
                )}

                {!!pokemon.abilities?.length && (
                  <li>
                    <ul>
                      {pokemon.abilities.map(({ ability }) => {
                        if (!ability.name) return null

                        return (
                          <li key={ability.url}>
                            <p>{renderAbilityName(ability.name)}</p>
                          </li>
                        )
                      })}
                    </ul>
                    <span>Abilities</span>
                  </li>
                )}
              </ul>
            </section>

            {!!pokemon.stats?.length && (
              <section>
                <h2 className={styles.contentTitle}>Base stats</h2>

                <ul className={styles.stats}>
                  {pokemon.stats.map((stat) => {
                    if (!stat.stat.name) return null

                    return (
                      <li key={stat.stat.name}>
                        <span>{renderStatName(stat.stat.name)}</span>

                        <p>
                          <span className={styles.value}>
                            {stat.base_stat < 100
                              ? `0${stat.base_stat}`
                              : stat.base_stat}
                          </span>

                          <span className={styles.bar}>
                            <span
                              className={styles.progress}
                              style={{
                                width: `${(stat.base_stat / 300) * 100}%`,
                              }}
                            />
                          </span>
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </section>
            )}
          </div>
        </main>
      </div>
    </>
  )
}
