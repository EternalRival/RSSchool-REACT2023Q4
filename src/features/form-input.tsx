import { FC, HTMLInputTypeAttribute } from 'react'

type Props = {
  label: string
  id: string
  type?: HTMLInputTypeAttribute
  validateErrors?: string[]
}

export const FormInput: FC<Props> = ({
  label,
  id,
  type = 'text',
  validateErrors = [],
}) => {
  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        name={id}
        className={validateErrors.length > 0 ? 'invalid' : ''}
      />
      <span className="form-error-message">{validateErrors.join(', ')}</span>
    </>
  )
}