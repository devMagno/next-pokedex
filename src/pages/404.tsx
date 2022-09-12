import Link from 'next/link'

import SEO from '../components/SEO'

import styles from '../styles/Custom404.module.scss'

export default function Custom404() {
  return (
    <>
      <SEO title="Pokédex | Page not found" />

      <main className={`main mainError ${styles.custom404}`}>
        <h1>Page not found</h1>
        <Link href="/">
          <a title="Go back">Go back</a>
        </Link>
      </main>
    </>
  )
}
