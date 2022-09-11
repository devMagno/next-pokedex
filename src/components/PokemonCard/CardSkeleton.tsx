import Skeleton from 'react-loading-skeleton'
import Link from 'next/link'

import styles from './PokemonCard.module.scss'

export default function CardSkeleton() {
  return (
    <Link href="/">
      <a className={styles.card}>
        <span>
          <span className={styles.id}>
            <Skeleton style={{ maxWidth: '50px' }} />
          </span>

          <div className={styles.sprite}>
            <Skeleton height={62} width={72} style={{ margin: '2px 0 7px' }} />
          </div>

          <h2 className={styles.name}>
            <Skeleton />
            <span className="sr-only">Loading</span>
          </h2>
        </span>
      </a>
    </Link>
  )
}
