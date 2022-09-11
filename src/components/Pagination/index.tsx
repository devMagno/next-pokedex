import styles from './Pagination.module.scss'

interface PaginationProps {
  totalCountOfRegister: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)].map((_, index) => from + index + 1)
}

export default function Pagination({
  totalCountOfRegister,
  registersPerPage = 60,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegister / registersPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : []

  return (
    <nav className={styles.pagination}>
      <ol className={styles.list}>
        {currentPage > siblingsCount + 1 && (
          <>
            <li>
              <button type="button" onClick={() => onPageChange(1)}>
                1
              </button>
            </li>

            {currentPage > 2 + siblingsCount && (
              <li>
                <span>...</span>
              </li>
            )}
          </>
        )}

        {previousPages.length
          ? previousPages.map((page) => (
              <li key={page}>
                <button type="button" onClick={() => onPageChange(page)}>
                  {page}
                </button>
              </li>
            ))
          : ''}

        <li>
          <button
            className={styles.current}
            type="button"
            onClick={() => onPageChange(currentPage)}
          >
            {currentPage}
          </button>
        </li>

        {nextPages.length
          ? nextPages.map((page) => (
              <li key={page}>
                <button type="button" onClick={() => onPageChange(page)}>
                  {page}
                </button>
              </li>
            ))
          : ''}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <li>
                <span>...</span>
              </li>
            )}

            <li>
              <button type="button" onClick={() => onPageChange(lastPage)}>
                {lastPage}
              </button>
            </li>
          </>
        )}
      </ol>
    </nav>
  )
}
