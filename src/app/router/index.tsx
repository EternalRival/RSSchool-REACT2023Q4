import { ErrorPage } from '@pages/error.page'
import { MainPage } from '@pages/main.page'
import { NotFoundPage } from '@pages/not-found.page'
import { ReactHookFormPage } from '@pages/react-hook-form.page'
import { UncontrolledComponentsPage } from '@pages/uncontrolled-components.page'
import { Endpoint } from '@shared/enums/endpoint.enum'
import { RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: Endpoint.ROOT,
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: Endpoint.UNCONTROLLED_COMPONENTS,
    element: <UncontrolledComponentsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: Endpoint.REACT_HOOK_FORM,
    element: <ReactHookFormPage />,
    errorElement: <ErrorPage />,
  },
  { path: '*', element: <NotFoundPage />, errorElement: <ErrorPage /> },
]
