import { DetailedSection } from 'features/detailed-section'
import { ErrorPage } from 'pages/error-page'
import { MainPage } from 'pages/main-page'
import { NotFoundPage } from 'pages/not-found-page'
import { Endpoint } from 'shared/constants'

export const routes = [
  {
    path: Endpoint.ROOT,
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `${Endpoint.DETAILS}:id`,
        element: <DetailedSection />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  { path: '*', element: <NotFoundPage />, errorElement: <ErrorPage /> },
]
