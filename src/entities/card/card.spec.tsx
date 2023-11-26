import { render, screen, within } from '@testing-library/react'
import { mockListItem } from '@tests/mocks/mock-list-response'
import { mockRouter } from '@tests/test-utils'
import { Card } from '.'

describe('Card', () => {
  it('Ensure that the card component renders the relevant card data', async () => {
    const { Provider } = mockRouter()
    render(
      <Provider>
        <Card {...mockListItem} />
      </Provider>
    )

    const { title, year, totalSeasons, rating } = mockListItem
    const description = screen.getByLabelText(/card description/i)
    const checklist = [year, totalSeasons, rating]

    const card = screen.getByRole('link')

    expect(within(card).getByRole('heading')).toHaveTextContent(title ?? '')
    checklist.forEach((prop) => {
      expect(description).toHaveTextContent((prop ?? '').toString())
    })
  })
})
