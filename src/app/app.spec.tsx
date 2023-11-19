import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from '.'

describe('App', () => {
  it('App renders', async () => {
    render(<App />)

    expect(screen.getByRole('main')).toBeVisible()
  })
})
