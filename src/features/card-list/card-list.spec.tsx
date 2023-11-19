import { render, screen } from '@testing-library/react'
import { noResultsMessage } from 'shared/constants'
import { mockList } from 'tests/mock/mock-list-response'
import { MemoryRouter } from 'tests/test-utils'
import { describe, expect, it } from 'vitest'
import { CardList } from '.'

describe('Card List', () => {
  it('Verify that the component renders the specified number of cards', () => {
    render(<MemoryRouter element={<CardList list={mockList} />} />)

    expect(screen.getByRole('list').childElementCount).toBe(mockList.length)
  })

  it('Check that an appropriate message is displayed if no cards are present', () => {
    render(<MemoryRouter element={<CardList list={[]} />} />)

    expect(screen.getByText(noResultsMessage, { exact: false })).toBeVisible()
  })
})
