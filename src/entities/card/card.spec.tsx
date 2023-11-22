import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as MyShowsApiService from 'app/redux/api/myshows.service'
import { DetailedSection } from 'features/detailed-section'
import { Outlet } from 'react-router-dom'
import { Endpoint } from 'shared/constants'
import { mockListItem } from 'tests/mock/mock-list-response'
import { MemoryRouter, MemoryRouterWithStore } from 'tests/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { Card } from '.'

describe('Card', () => {
  const user = userEvent.setup()

  it('Ensure that the card component renders the relevant card data', async () => {
    render(<MemoryRouter element={<Card {...mockListItem} />} />)

    const { title, year, image, totalSeasons, rating } = mockListItem
    const description = screen.getByLabelText(/card description/i)
    const checklist = [year, totalSeasons, rating]

    const card = screen.getByRole('link')

    expect(within(card).getByRole('heading')).toHaveTextContent(title ?? '')
    expect(within(card).getByRole('img')).toHaveAttribute('src', image)
    checklist.forEach((prop) => {
      expect(description).toHaveTextContent((prop ?? '').toString())
    })
  })

  it('Validate that clicking on a card opens a detailed card component', async () => {
    render(
      <MemoryRouterWithStore
        element={
          <>
            <Card {...mockListItem} />
            <Outlet />
          </>
        }
        subElement={<DetailedSection />}
        subPath={`${Endpoint.DETAILS}:id`}
      />
    )

    expect(screen.queryByRole('complementary')).toBeNull()
    await user.click(screen.getByRole('link'))

    expect(await screen.findByRole('complementary')).toBeVisible()
  })

  it('Check that clicking triggers an additional API call to fetch detailed information', async () => {
    render(
      <MemoryRouterWithStore
        element={
          <>
            <Card {...mockListItem} />
            <Outlet />
          </>
        }
        subElement={<DetailedSection />}
        subPath={`${Endpoint.DETAILS}:id`}
      />
    )

    const apiCallSpy = vi.spyOn(MyShowsApiService, 'useGetByIdQuery')

    expect(apiCallSpy).not.toBeCalled()

    for (let i = 1; i <= 5; i += 1) {
      await user.click(screen.getByRole('link'))
      expect(apiCallSpy).toBeCalledTimes(i)

      const closeButton = screen.getByRole('button', { name: /close button/i })
      await user.click(closeButton)
    }
  })
})
