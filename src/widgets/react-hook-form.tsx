import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { addSubmitData } from '@app/redux/slices/first.slice'
import { FormInput } from '@features/form-input'
import { FormInputPassword } from '@features/form-input-password'
import { yupResolver } from '@hookform/resolvers/yup'
import { Endpoint } from '@shared/enums/endpoint.enum'
import { fileToBase64 } from '@shared/lib/file-converter'
import { composedFormSchema } from '@shared/validation/schemas/composed-form.schema'
import { FormFields } from '@shared/validation/types/form-fields.type'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Form, useNavigate } from 'react-router-dom'

export const ReactHookForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>({
    mode: 'onChange',
    resolver: yupResolver(composedFormSchema, { abortEarly: false }),
  })

  const countries = useAppSelector((state) => state.countries)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleFormSubmit: SubmitHandler<FormFields> = async (data) => {
    const file = data.picture
    const picture = await fileToBase64(file)
    dispatch(addSubmitData({ ...data, picture }))
    navigate(Endpoint.ROOT)
  }

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <fieldset>
        <legend>React Hook Form</legend>

        <FormInput
          inputProps={{ ...register('name'), placeholder: 'Oleg' }}
          label="Name"
          fieldError={errors.name}
        />

        <FormInput
          inputProps={{ ...register('age'), type: 'number', placeholder: '27' }}
          label="Age"
          fieldError={errors.age}
        />

        <FormInput
          inputProps={{
            ...register('email'),
            type: 'email',
            placeholder: 'oleg-kekov@gmail.com',
          }}
          label="E-mail"
          fieldError={errors.email}
        />

        <FormInputPassword
          inputProps={{ ...register('password'), placeholder: 'P@ssw0rd' }}
          label="Password"
          fieldError={errors.password}
        />
        <FormInputPassword
          inputProps={{
            ...register('password-confirm'),
            placeholder: 'P@ssw0rd',
          }}
          label="Password Confirm"
          fieldError={errors['password-confirm']}
        />

        <label htmlFor="gender">Gender:</label>
        <select {...register('gender')} id="gender">
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>

        <FormInput
          inputProps={{ ...register('terms'), type: 'checkbox' }}
          label="Terms & Conditions"
          fieldError={errors.terms}
        />

        <FormInput
          inputProps={{
            ...register('picture'),
            type: 'file',
            accept: '.jpg,.png',
          }}
          label="Picture"
          fieldError={errors.picture}
        />

        <label htmlFor="country">Country:</label>
        <select {...register('country')} id="country">
          {countries.map(({ name }) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </select>
      </fieldset>
      <button disabled={Object.keys(errors).length > 0}>submit</button>
    </Form>
  )
}
