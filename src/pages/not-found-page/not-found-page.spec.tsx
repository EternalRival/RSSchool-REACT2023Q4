import { render, screen } from '@testing-library/react'
import { routes } from 'app/router'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

describe('404 Page', () => {
  it('Ensure that the 404 page is displayed when navigating to an invalid route', async () => {
    const initialEntries = ['/an-invalid-route']
    const router = createMemoryRouter(routes, { initialEntries })
    render(<RouterProvider router={router} />)

    expect(
      screen.getByRole('heading', { name: '[404] Not Found' })
    ).toBeVisible()
  })
})
