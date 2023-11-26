import { render, screen } from '@testing-library/react'
import NotFound from './404.page'

describe('404 Page', () => {
  it('404 page has proper heading', async () => {
    render(<NotFound />)
    expect(screen.getByRole('heading', { name: '[404] Not Found' })).toBeVisible()
  })
})
