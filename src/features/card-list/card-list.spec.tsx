import { mockList } from '@shared/api/myshows/mocks/mock-list-response'
import { noResultsMessage } from '@shared/constants'
import { render, screen } from '@testing-library/react'
import { mockUseRouter } from '@tests/test-utils'
import * as nextRouter from 'next/router'
import { CardList } from '.'

describe('Card List', () => {
  vi.spyOn(nextRouter, 'useRouter').mockReturnValue(mockUseRouter())

  it('Verify that the component renders the specified number of cards', () => {
    render(<CardList list={mockList} />)

    expect(screen.getByRole('list').childElementCount).toBe(mockList.length)
  })

  it('Check that an appropriate message is displayed if no cards are present', () => {
    render(<CardList list={[]} />)

    expect(screen.getByText(noResultsMessage, { exact: false })).toBeVisible()
  })
})
