import { FC } from 'react'
import { ErrorButtonIcon } from './ui/error-button-icon'
// import styles from './error-throwing-button.module.css'

export const ErrorThrowingButton: FC = () => {
  // const [errorTriggered, setErrorTriggered] = useState(false)

  // if (errorTriggered) {
  //   throw new Error('Oops! Something gone wrong >_<')
  // }

  return (
    <button
      className="fixed bottom-6 right-6 z-50 h-12 w-12 cursor-pointer rounded-full bg-teal-100 shadow-md ring-1 ring-inset ring-teal-400 hover:brightness-110 active:brightness-100"
      onClick={(): void => {
        // setErrorTriggered(true)
      }}
    >
      <ErrorButtonIcon
        className="m-auto"
        fill="teal"
      />
    </button>
  )
}
// aspect-square cursor-pointer rounded bg-gray-100 text-center shadow ring-1 ring-inset ring-gray-400
