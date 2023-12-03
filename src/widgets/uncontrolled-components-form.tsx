import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { addSubmitData } from '@app/redux/slices/first.slice'
import { FormInput } from '@features/form-input'
import { FormInputPassword } from '@features/form-input-password'
import { Endpoint } from '@shared/enums/endpoint.enum'
import { fileToBase64 } from '@shared/lib/file-converter'
import { composedFormSchema } from '@shared/validation/schemas/composed-form.schema'
import { FormFields } from '@shared/validation/types/form-fields.type'
import { FC, FormEventHandler, useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { ValidationError } from 'yup'

type ErrorMessage = { message: string }
type ErrorList = {
  name?: ErrorMessage
  age?: ErrorMessage
  email?: ErrorMessage
  password?: ErrorMessage
  'password-confirm'?: ErrorMessage
  gender?: ErrorMessage
  terms?: ErrorMessage
  picture?: ErrorMessage
  country?: ErrorMessage
}

export const UncontrolledComponentsForm: FC = () => {
  const [errors, setErrors] = useState<ErrorList>({})
  const countries = useAppSelector((state) => state.countries)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const validateForm = async (
    form: HTMLFormElement
  ): Promise<{ errors: ErrorList } | { submitData: FormFields }> => {
    const formData = new FormData(form)

    try {
      const submitData = await composedFormSchema.validate(
        Object.fromEntries(formData.entries()),
        { abortEarly: false }
      )
      return { submitData }
    } catch (e) {
      if (e instanceof ValidationError) {
        const errors = e.inner.reduce<ErrorList>((acc, { path, message }) => {
          return path ? { ...acc, [path]: { message } } : acc
        }, {})
        return { errors }
      }
      throw e
    }
  }

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    if (!(e.target instanceof HTMLFormElement)) {
      throw new Error('e.target is not HTMLFormElement')
    }

    validateForm(e.target).then(async (result) => {
      if ('errors' in result) {
        setErrors(result.errors)
      }
      if ('submitData' in result) {
        const { submitData } = result
        const picture = await fileToBase64(submitData.picture)
        dispatch(addSubmitData({ ...submitData, picture }))
        navigate(Endpoint.ROOT)
      }
    })
  }
  return (
    <Form navigate={false} noValidate={true} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Uncontrolled Components Form</legend>
        <FormInput
          inputProps={{ name: 'name', placeholder: 'Oleg' }}
          label="Name"
          fieldError={errors.name}
        />
        <FormInput
          inputProps={{ name: 'age', type: 'number', placeholder: '27' }}
          label="Age"
          fieldError={errors.age}
        />
        <FormInput
          inputProps={{
            name: 'email',
            type: 'email',
            placeholder: 'oleg-kekov@gmail.com',
          }}
          label="E-mail"
          fieldError={errors.email}
        />
        <FormInputPassword
          inputProps={{ name: 'password', placeholder: 'P@ssw0rd' }}
          label="Password"
          fieldError={errors.password}
        />
        <FormInputPassword
          inputProps={{ name: 'password-confirm', placeholder: 'P@ssw0rd' }}
          label="Password Confirm"
          fieldError={errors['password-confirm']}
        />

        <label htmlFor="gender">Gender:</label>
        <select name="gender" id="gender">
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        <FormInput
          inputProps={{ name: 'terms', type: 'checkbox' }}
          label="Terms & Conditions"
          fieldError={errors.terms}
        />
        <FormInput
          inputProps={{
            name: 'picture',
            type: 'file',
            accept: '.jpg,.png',
          }}
          label="Picture"
          fieldError={errors.picture}
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
