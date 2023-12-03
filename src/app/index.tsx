import { FC } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './router'
import { store } from './redux/store'
import { Provider } from 'react-redux'

export const App: FC = () => {
  const router = createBrowserRouter(routes)

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
