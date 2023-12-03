import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { addSubmitData } from '@app/redux/slices/first.slice'
import { FormInput } from '@features/form-input'
import { FormPasswordInput } from '@features/form-password-input'
import { Endpoint } from '@shared/enums/endpoint.enum'
import { validateForm } from '@shared/lib/validate-form'
import { FC, FormEventHandler, useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'

export const UncontrolledComponentsForm: FC = () => {
  const [validateErrors, setValidateErrors] = useState(
    new Map<string, Set<string>>([
      ['nameErrors', new Set()],
      ['ageErrors', new Set()],
      ['emailErrors', new Set()],
      ['passwordErrors', new Set()],
      ['passwordConfirmErrors', new Set()],
      ['termsErrors', new Set()],
      ['pictureErrors', new Set()],
    ])
  )
  const countries = useAppSelector((state) => state.countries)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const getErrorList = (key: string): string[] =>
    Array.from(validateErrors.get(key)?.values() ?? [])

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    if (!(e.target instanceof HTMLFormElement)) {
      throw new Error('e.target is not HTMLFormElement')
    }

    validateForm(e.target, validateErrors).then(({ errors, submitData }) => {
      if (Array.from(errors.values()).some((set) => set.size > 0)) {
        setValidateErrors(errors)
      } else {
        dispatch(addSubmitData(submitData))
        navigate(Endpoint.ROOT)
      }
    })
  }
  return (
    <Form navigate={false} noValidate={true} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Uncontrolled Components Form</legend>
        <FormInput
          label="Name"
          id="name"
          validateErrors={getErrorList('nameErrors')}
        />
        <FormInput
          label="Age"
          id="age"
          type="number"
          validateErrors={getErrorList('ageErrors')}
        />
        <FormInput
          label="E-mail"
          id="email"
          type="email"
          validateErrors={getErrorList('emailErrors')}
        />
        <FormPasswordInput
          label="Password"
          id="password"
          validateErrors={getErrorList('passwordErrors')}
        />
        <FormPasswordInput
          label="Password Confirm"
          id="password-confirm"
          validateErrors={getErrorList('passwordConfirmErrors')}
        />
        <label htmlFor="gender">Gender:</label>
        <select name="gender" id="gender">
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        <FormInput
          label="Terms & Conditions"
          id="terms"
          type="checkbox"
          validateErrors={getErrorList('termsErrors')}
        />
        <FormInput
          label="Picture"
          id="picture"
          type="file"
          validateErrors={getErrorList('pictureErrors')}
          accept=".jpg,.png"
        />
        <label htmlFor="country">Country:</label>
        <select name="country" id="country">
          {countries.map(({ name }) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </select>
      </fieldset>
      <button>submit</button>
    </Form>
  )
}
