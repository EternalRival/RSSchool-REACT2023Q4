import { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { routes } from './router'
import { store } from './redux/store'

export const App: FC = () => {
  const router = createBrowserRouter(routes)

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
