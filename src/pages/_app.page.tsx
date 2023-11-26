import { ErrorBoundary } from '@features/error-boundary'
import '@shared/styles/globals.css'
import type { AppProps } from 'next/app'
import { FC } from 'react'

const errorFallback = <h1>[ErrorBoundary]: App Error :(</h1>

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ErrorBoundary fallback={errorFallback}>
    <Component {...pageProps} />
  </ErrorBoundary>
)

export default App
