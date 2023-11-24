import { ErrorThrowingButton } from '@features/error-throwing-button'
import { BottomSection } from '@widgets/bottom-section'
import { TopSection } from '@widgets/top-section'
import { FC } from 'react'

export const MainPage: FC = () => {
  return (
    <main className="flex flex-col justify-between">
      <ErrorThrowingButton />
      <h1 hidden={true}>TV Shows App</h1>
      <TopSection />
      <BottomSection />
    </main>
    // <Outlet />
  )
}
