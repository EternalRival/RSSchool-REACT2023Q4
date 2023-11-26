import { render, screen } from '@testing-library/react'
import { createMockHomePageProps } from '@tests/mocks/mock-home-page-props'
import { mockRouter } from '@tests/test-utils'
import Home from './index.page'

describe('Home Page', () => {
  it('Home page has main rendered', async () => {
    const { Provider } = mockRouter()
    render(
      <Provider>
        <Home {...createMockHomePageProps()} />
      </Provider>
    )

    expect(screen.getByRole('main')).toBeVisible()
  })
})
