import { StoreProvider } from 'app/redux/store'
import { FC, ReactNode } from 'react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { Endpoint } from 'shared/constants'

type MemoryRouterProps = {
  element: ReactNode
  path?: string
  subElement?: ReactNode
  subPath?: string
} & Parameters<typeof createMemoryRouter>[1]

export const MemoryRouter: FC<MemoryRouterProps> = ({
  element,
  path = Endpoint.ROOT,
  subElement,
  subPath = Endpoint.DETAILS,
  initialEntries,
  initialIndex,
}) => {
  const routes = subElement
    ? [{ path, element, children: [{ path: subPath, element: subElement }] }]
    : [{ path, element }]
  return (
    <RouterProvider
      router={createMemoryRouter(routes, { initialEntries, initialIndex })}
    />
  )
}

export const MemoryRouterWithStore: typeof MemoryRouter = (args) => {
  return (
    <StoreProvider>
      <MemoryRouter {...args} />
    </StoreProvider>
  )
}
