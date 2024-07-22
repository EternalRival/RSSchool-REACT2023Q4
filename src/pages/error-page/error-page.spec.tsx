import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'tests/test-utils'
import { describe, expect, it } from 'vitest'
import { ErrorMessage, ErrorPage } from '.'

describe('Error page', () => {
  it('ErrorMessage component prints error message', async () => {
    const errorMessage = 'Error thrown'

    render(
      <MemoryRouter
        element={<ErrorMessage error={new Error(errorMessage)} />}
      />
    )

    expect(screen.getByText(errorMessage)).toBeVisible()
  })

  it('Error page renders', async () => {
    render(<MemoryRouter element={<ErrorPage />} />)

    expect(
      screen.getByRole('heading', { name: /errorboundary/i })
    ).toBeVisible()
    expect(
      screen.getByRole('heading', { name: /something went wrong/i })
    ).toBeVisible()
  })
})
