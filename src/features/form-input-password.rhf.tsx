import { FC, InputHTMLAttributes, ReactNode, useId, useRef } from 'react'
import { FieldError } from 'react-hook-form'
import { Property } from 'csstype'
import { passwordChecklist } from '@shared/validation/schemas/valid-password.schema'

type Props = {
  label: ReactNode
  inputProps: InputHTMLAttributes<HTMLInputElement>
  fieldError?: FieldError
}

export const FormInputPassword: FC<Props> = ({
  inputProps,
  label,
  fieldError,
}) => {
  const maxStrength = 4
  const backgroundColors: Property.BackgroundColor[] = [
    'transparent',
    'red',
    'orange',
    'yellowgreen',
    'green',
  ]
  const progress = useRef<HTMLProgressElement>(null)
  const id = useId()
  const inputId = inputProps.id ?? id

  return (
    <>
      <label htmlFor={inputId}>{label}:</label>
      <input
        className={fieldError ? 'invalid' : ''}
        autoComplete="off"
        type="password"
        id={inputId}
        {...inputProps}
        onChange={(e) => {
          if (inputProps.onChange) {
            inputProps.onChange(e)
          }

          if (progress.current) {
            const regexList = Array.from(passwordChecklist.keys())
            const strength = regexList.reduce((counter, regex) => {
              return counter + +regex.test(e.target.value)
            }, 0)
            const color = backgroundColors[strength]
            progress.current.value = strength
            progress.current.style.setProperty('--progress-color', color)
          }
        }}
      />
      <progress
        ref={progress}
        className="password-strength"
        max={maxStrength}
      />
      <span className="form-error-message">{fieldError?.message}</span>
    </>
  )
}
