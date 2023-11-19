import { render, screen } from '@testing-library/react'
import { MemoryRouterWithStore } from 'tests/test-utils'
import { describe, expect, it } from 'vitest'
import { MainPage } from '.'

describe('Main page', () => {
  it('Main page renders', async () => {
    render(<MemoryRouterWithStore element={<MainPage />} />)

    expect(screen.getByRole('main')).toBeVisible()
  })
})
