import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { isEnabledStrictMode } from 'shared/constants'
import { App } from './app'

createRoot(document.getElementById('root')!).render(
  isEnabledStrictMode ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (
    <App />
  )
)
