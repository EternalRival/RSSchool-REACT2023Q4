import { mockList } from '@shared/api/myshows/mocks/mock-list-response'
import { noResultsMessage } from '@shared/constants'
import { render, screen } from '@testing-library/react'
import { MockRouterProvider } from '@tests/test-utils'
import { CardList } from '.'

describe('Card List', () => {
  it('Verify that the component renders the specified number of cards', () => {
    render(
      <MockRouterProvider>
        <CardList list={mockList} />
      </MockRouterProvider>
    )

    expect(screen.getByRole('list').childElementCount).toBe(mockList.length)
  })

  it('Check that an appropriate message is displayed if no cards are present', () => {
    render(
      <MockRouterProvider>
        <CardList list={[]} />
      </MockRouterProvider>
    )

    expect(screen.getByText(noResultsMessage, { exact: false })).toBeVisible()
  })
})
