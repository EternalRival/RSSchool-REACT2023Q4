import { DetailedCard } from '@entities/detailed-card'
import { ErrorThrowingButton } from '@features/error-throwing-button'
import { BottomSection } from '@widgets/bottom-section'
import { TopSection } from '@widgets/top-section'
import { FC } from 'react'
import { mockDetails } from '../../tests/mock/mock-details-response'

export const MainPage: FC = () => {
  return (
    <>
      <main className="flex flex-col justify-between">
        <ErrorThrowingButton />
        <h1 hidden={true}>TV Shows App</h1>
        <TopSection />
        <BottomSection />
      </main>
      <DetailedCard
        handleClose={() => {}}
        {...mockDetails}
      />
    </>
  )
}
