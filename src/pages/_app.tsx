import { QueryClientProvider } from 'react-query'
import type { AppProps } from 'next/app'

import queryClient from '../services/queryClient'

import '../styles/reset.scss'
import '../styles/globals.scss'
import 'react-loading-skeleton/dist/skeleton.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
