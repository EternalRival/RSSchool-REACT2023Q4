import Home from '@pages/index.page'
import { render, screen } from '@testing-library/react'
import { createMockHomePageProps } from '@tests/mocks/mock-home-page-props'
import { mockRouter } from '@tests/test-utils'

describe('Pagination', () => {
  it('Pagination component is visible on Main page', async () => {
    const { Provider } = mockRouter()
    render(
      <Provider>
        <Home {...createMockHomePageProps()} />
      </Provider>
    )

    const buttons = [/go to first/i, /go to prev/i, /current page/i, /go to next/i, /go to last/i].map((alt) => {
      return screen.getByRole('button', { name: alt })
    })
    const select = screen.getByRole('combobox', { name: /items per page select element/i })

    buttons.concat([select]).forEach((element) => expect(element).toBeVisible())
  })
})
