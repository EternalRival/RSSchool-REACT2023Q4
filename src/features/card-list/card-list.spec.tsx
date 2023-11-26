import { mockList } from '@tests/mocks/mock-list-response'
import { noResultsMessage } from '@shared/constants'
import { render, screen } from '@testing-library/react'
import { mockRouter } from '@tests/test-utils'
import { CardList } from '.'

describe('Card List', () => {
  it('Verify that the component renders the specified number of cards', () => {
    const { Provider } = mockRouter()
    render(
      <Provider>
        <CardList list={mockList} />
      </Provider>
    )

    expect(screen.getByRole('list').childElementCount).toBe(mockList.length)
  })

  it('Check that an appropriate message is displayed if no cards are present', () => {
    const { Provider } = mockRouter()
    render(
      <Provider>
        <CardList list={[]} />
      </Provider>
    )

    expect(screen.getByText(noResultsMessage, { exact: false })).toBeVisible()
  })
})
