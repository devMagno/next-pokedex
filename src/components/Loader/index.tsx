import styles from './Loader.module.scss'

interface LoaderProps {
  width?: string
  height?: string
}

export default function Loader({
  width = '16px',
  height = '16px',
}: LoaderProps) {
  return <span className={styles.loader} style={{ width, height }} />
}
