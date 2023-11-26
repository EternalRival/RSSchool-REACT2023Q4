import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import { NextRouter } from 'next/router'
import { FC, ReactNode } from 'react'

const useRouterDefaultProps: NextRouter = {
  route: '',
  pathname: '',
  query: {},
  asPath: '',
  basePath: '',
  isLocaleDomain: false,
  push: vi.fn(),
  replace: vi.fn(),
  reload: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  prefetch: vi.fn(),
  beforePopState: vi.fn(),
  events: { on: vi.fn(), off: vi.fn(), emit: vi.fn() },
  isFallback: false,
  isReady: false,
  isPreview: false,
}

export const mockRouter: (nextRouterProps?: Partial<NextRouter>) => {
  router: NextRouter
  Provider: FC<{ children: ReactNode }>
} = (nextRouterProps) => {
  const router = { ...useRouterDefaultProps, ...nextRouterProps }
  return {
    router,
    Provider: ({ children }) => <RouterContext.Provider value={router}>{children}</RouterContext.Provider>,
  }
}
