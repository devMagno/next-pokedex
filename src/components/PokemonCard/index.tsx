import Skeleton from 'react-loading-skeleton'
import Image from 'next/image'
import Link from 'next/link'

import { usePokemon } from '../../services/hooks/usePokemon'
import { SimpleAttribute } from '../../types/pokemon'

import styles from './PokemonCard.module.scss'

interface PokemonCardProps {
  pokemon: SimpleAttribute
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const { data, isLoading, error } = usePokemon(pokemon.name)

  if (error) return null

  return (
    <Link href={`/pokemon/${data?.id}`}>
      <a className={styles.card}>
        <span className={data?.types[0].type.name}>
          <span className={styles.id}>
            {isLoading ? (
              <Skeleton style={{ maxWidth: '50px' }} />
            ) : (
              `#${data?.id}`
            )}
          </span>

          <div className={styles.sprite}>
            {isLoading ? (
              <Skeleton
                height={62}
                width={72}
                style={{ margin: '2px 0 7px' }}
              />
            ) : (
              data?.sprites.front_default && (
                <Image
                  src={data.sprites.front_default}
                  width={72}
                  height={72}
                />
              )
            )}
          </div>

          <h2 className={styles.name}>{pokemon.name}</h2>
        </span>
      </a>
    </Link>
  )
}
