import {
  validatePasswordLowercasedLetter,
  validatePasswordNumber,
  validatePasswordSpecialCharacter,
  validatePasswordUppercasedLetter,
} from '@shared/validators/password.validator'
import { CSSProperties, FC, useState } from 'react'
import { Property } from 'csstype'

type Props = {
  label: string
  id: string
  validateErrors?: string[]
}

const passwordValidators = [
  validatePasswordNumber,
  validatePasswordUppercasedLetter,
  validatePasswordLowercasedLetter,
  validatePasswordSpecialCharacter,
] as const

const maxStrength = 4

export const FormPasswordInput: FC<Props> = ({
  label,
  id,
  validateErrors = [],
}) => {
  const [passwordStrength, setPasswordStrength] = useState(0)

  const progressColors: Property.BackgroundColor[] = [
    'red',
    'orange',
    'yellowgreen',
    'green',
  ]

  const progressColor = {
    '--progress-color': progressColors[passwordStrength - 1],
  } as CSSProperties

  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input
        type="password"
        id={id}
        name={id}
        className={validateErrors.length > 0 ? 'invalid' : ''}
        onChange={async ({ target }) => {
          const results = await Promise.all(
            passwordValidators.map((validate) => validate(target.value))
          )
          setPasswordStrength(results.filter(({ isValid }) => isValid).length)
        }}
        autoComplete="off"
      />
      <progress
        className="password-strength"
        max={maxStrength}
        value={passwordStrength}
        style={progressColor}
      />
      <span className="form-error-message">{validateErrors.join(', ')}</span>
    </>
  )
}
