import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import { NextRouter } from 'next/router'
import { FC, ReactNode, useMemo } from 'react'

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

export const MockRouterProvider: FC<{
  children: ReactNode
  nextRouterProps?: Partial<NextRouter>
}> = ({ children, nextRouterProps }) => {
  const routerProps = useMemo(() => ({ ...useRouterDefaultProps, ...nextRouterProps }), [nextRouterProps])
  return <RouterContext.Provider value={routerProps}>{children}</RouterContext.Provider>
}
