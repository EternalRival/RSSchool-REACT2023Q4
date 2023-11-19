import { Demo } from 'features/demo'
import { ErrorBoundary } from 'features/error-boundary'
import { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { StoreProvider } from './redux/store'
import { routes } from './router'

export const App: FC = () => {
  const errorFallback = <h1>[ErrorBoundary]: App Error :(</h1>
  const router = createBrowserRouter(routes)

  return (
    <ErrorBoundary fallback={errorFallback}>
      <StoreProvider>
        <RouterProvider router={router} />
        <Demo />
      </StoreProvider>
    </ErrorBoundary>
  )
}
