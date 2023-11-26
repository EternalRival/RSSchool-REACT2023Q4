import { render, screen } from '@testing-library/react'
import InternalServerError from './500'

describe('500 Page', () => {
  it('500 page has proper heading', async () => {
    render(<InternalServerError />)
    expect(screen.getByRole('heading', { name: '[500] Internal Server Error' })).toBeVisible()
  })
})
