import { passwordChecklist } from '@shared/validation/schemas/valid-password.schema'
import { FC, useRef } from 'react'
import { Property } from 'csstype'

type Props = {
  label: string
  id: string
  validateErrors?: string[]
}

const maxStrength = 4

const backgroundColors: Property.BackgroundColor[] = [
  'transparent',
  'red',
  'orange',
  'yellowgreen',
  'green',
]

export const FormPasswordInput: FC<Props> = ({
  label,
  id,
  validateErrors = [],
}) => {
  const progress = useRef<HTMLProgressElement>(null)

  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input
        type="password"
        id={id}
        name={id}
        className={validateErrors.length > 0 ? 'invalid' : ''}
        onChange={({ target }) => {
          if (progress.current) {
            const passwordStrength = Array.from(
              passwordChecklist.keys()
            ).reduce((counter, regex) => counter + +regex.test(target.value), 0)

            progress.current.value = passwordStrength
            progress.current.style.setProperty(
              '--progress-color',
              backgroundColors[passwordStrength]
            )
          }
        }}
        autoComplete="off"
      />
      <progress
        className="password-strength"
        max={maxStrength}
        ref={progress}
      />
      <span className="form-error-message">{validateErrors.join(', ')}</span>
    </>
  )
}
