import { render, screen } from '@testing-library/react'
import { createMockHomePageProps } from '@tests/mocks/mock-home-page-props'
import { mockRouter } from '@tests/test-utils'
import Home from '.'

describe('Home Page', () => {
  it('Home page has proper heading', async () => {
    const { Provider } = mockRouter()
    render(
      <Provider>
        <Home {...createMockHomePageProps()} />
      </Provider>
    )

    const page = screen.getByRole('main')
    const heading = screen.getByRole('heading', { name: /TV shows app/i })

    expect(page).toContainElement(heading)
  })
})
