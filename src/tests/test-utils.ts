import * as nextRouter from 'next/router'
import { SpyInstance } from 'vitest'

type NextRouter = nextRouter.NextRouter

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

export const mockUseRouter = (props?: Partial<NextRouter>): SpyInstance<[], NextRouter> => {
  return vi.spyOn(nextRouter, 'useRouter').mockReturnValue({ ...useRouterDefaultProps, ...props })
}
