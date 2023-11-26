import { FC, useState } from 'react'
import { ErrorButtonIcon } from './ui/error-button-icon'

export const ErrorThrowingButton: FC = () => {
  const [errorTriggered, setErrorTriggered] = useState(false)

  if (errorTriggered) {
    throw new Error('Oops! Something gone wrong >_<')
  }

  return (
    <button
      className="fixed bottom-6 right-6 z-50 h-12 w-12 cursor-pointer rounded-full bg-teal-100 shadow-md ring-1 ring-inset ring-teal-400 hover:brightness-110 active:brightness-100"
      onClick={(): void => {
        setErrorTriggered(true)
      }}
    >
      <ErrorButtonIcon
        className="m-auto"
        fill="teal"
      />
    </button>
  )
}
