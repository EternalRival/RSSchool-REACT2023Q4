import { FC, InputHTMLAttributes, ReactNode, useId } from 'react'
import { FieldError } from 'react-hook-form'

type Props = {
  label: ReactNode
  inputProps: InputHTMLAttributes<HTMLInputElement>
  fieldError?: FieldError
}

export const FormInput: FC<Props> = ({ inputProps, label, fieldError }) => {
  const id = useId()
  const inputId = inputProps.id ?? id

  return (
    <>
      <label htmlFor={inputId}>{label}:</label>
      <input
        className={fieldError ? 'invalid' : ''}
        autoComplete="off"
        type="text"
        id={inputId}
        {...inputProps}
      />
      <span className="form-error-message">{fieldError?.message}</span>
    </>
  )
}
