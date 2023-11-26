import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterAll, afterEach, beforeAll, vi } from 'vitest'
import { server } from './server'

beforeAll(() => server.listen())

afterEach(() => {
  server.resetHandlers()
  vi.clearAllMocks()
  cleanup()
})

afterAll(() => server.close())
