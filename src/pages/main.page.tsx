import { Navigation } from '@features/navigation'
import { SubmitTiles } from '@features/submit-tiles'
import { FC } from 'react'

export const MainPage: FC = () => (
  <main>
    <Navigation />
    <SubmitTiles />
  </main>
)
