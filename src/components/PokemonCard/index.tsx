import Image from 'next/image'
import Link from 'next/link'

import renderId from '../../helpers/renderId'
import usePokemon from '../../hooks/usePokemon'
import { SimpleAttribute } from '../../types/pokemon'

import CardSkeleton from './CardSkeleton'

import styles from './PokemonCard.module.scss'

interface PokemonCardProps {
  pokemon: SimpleAttribute
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const { data, isLoading, error } = usePokemon(pokemon.name)

  if (error) return null

  if (isLoading) return <CardSkeleton />

  return (
    <Link href={`/pokemon/${data?.id}`}>
      <a className={styles.card}>
        <span className={data?.types[0].type.name}>
          <span className={styles.id}>#{renderId(String(data?.id))}</span>

          <div className={styles.sprite}>
            {data?.sprites.front_default && (
              <Image
                width={72}
                height={72}
                alt={pokemon.name}
                title={pokemon.name}
                src={data.sprites.front_default}
              />
            )}
          </div>

          <h2 className={styles.name}>{data?.name}</h2>
        </span>
      </a>
    </Link>
  )
}
