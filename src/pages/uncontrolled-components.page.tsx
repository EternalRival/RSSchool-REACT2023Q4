import { useAppDispatch } from '@app/redux/hooks'
import { addSubmitData } from '@app/redux/slices/first.slice'
import { FormInput } from '@features/form-input'
import { FormPasswordInput } from '@features/form-password-input'
import { Endpoint } from '@shared/enums/endpoint.enum'
import { validateAge } from '@shared/validators/age.validator'
import { validateEMail } from '@shared/validators/email.validator'
import { validateGender } from '@shared/validators/gender.validator'
import { validateName } from '@shared/validators/name.validator'
import {
  validatePasswordLowercasedLetter,
  validatePasswordMatch,
  validatePasswordNumber,
  validatePasswordSpecialCharacter,
  validatePasswordUppercasedLetter,
} from '@shared/validators/password.validator'
import { validateTerms } from '@shared/validators/terms.validator'
import { FC, FormEventHandler, useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'

export const UncontrolledComponentsPage: FC = () => {
  const [validateErrors, setValidateErrors] = useState(
    new Map<string, Set<string>>([
      ['nameErrors', new Set()],
      ['ageErrors', new Set()],
      ['emailErrors', new Set()],
      ['passwordErrors', new Set()],
      ['passwordConfirmErrors', new Set()],
      ['termsErrors', new Set()],
    ])
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const getErrorList = (key: string): string[] =>
    Array.from(validateErrors.get(key)?.values() ?? [])

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault()
    if (!(e.target instanceof HTMLFormElement)) {
      throw new Error('e.target is not HTMLFormElement')
    }

    const formData = new FormData(e.target)
    const errors = new Map(validateErrors)
    const setErrors = (key: string, text: string, isValid: boolean): void => {
      errors.get(key)?.[isValid ? 'delete' : 'add'](text)
    }

    /* 
name
age
email
password
gender
acceptTermsAndConditions
picture
country
 */

    const name = await validateName(formData.get('name'))
    setErrors('nameErrors', name.message, name.isValid)

    const age = await validateAge(formData.get('age'))
    setErrors('ageErrors', age.message, age.isValid)

    const email = await validateEMail(formData.get('email'))
    setErrors('emailErrors', email.message, email.isValid)

    const passwordFormData = formData.get('password')
    const passwordConfirmFormData = formData.get('password-confirm')

    const passwordChecks = await Promise.all(
      [passwordFormData, passwordConfirmFormData].map((formDataValue) => {
        return Promise.all([
          validatePasswordNumber(formDataValue),
          validatePasswordUppercasedLetter(formDataValue),
          validatePasswordLowercasedLetter(formDataValue),
          validatePasswordSpecialCharacter(formDataValue),
        ])
      })
    )

    const passwordErrorKeys = ['passwordErrors', 'passwordConfirmErrors']
    passwordErrorKeys.forEach((key, i) => {
      const isMatched = validatePasswordMatch(
        passwordFormData,
        passwordConfirmFormData
      )
      setErrors(key, 'should match', isMatched)
      passwordChecks[i].forEach(({ message, isValid }) => {
        setErrors(key, message, isValid)
      })
    })

    const password = passwordChecks.flat().every(({ isValid }) => isValid)
      ? passwordChecks[0][0]
      : { value: null }

    const gender = await validateGender(formData.get('gender'))

    console.log({ terms: formData.get('terms') })
    const terms = await validateTerms(formData.get('terms'))
    setErrors('termsErrors', terms.message, terms.isValid)

    if (Array.from(errors.values()).some((set) => set.size > 0)) {
      setValidateErrors(errors)
    } else {
      dispatch(
        addSubmitData({
          name: name.value,
          age: age.value,
          email: email.value,
          password: password.value,
          gender: gender.value,
          terms: terms.isValid,
          picture: null, //picture.value,
          country: null, //country.value,
        })
      )
      navigate(Endpoint.ROOT)
    }

    /*    const age = await validateAge(formData.get('age'))
    const email = await validateEMail(formData.get('email'))

    const password = formData.get('password')
    const passwordConfirm = formData.get('password-confirm')

    const passwordFormData = formData.get('password')
    const passwordNumber = await validatePasswordNumber(passwordFormData)
    const passwordUppercased =
      await validatePasswordUppercasedLetter(passwordFormData)
    const passwordLowercased =
      await validatePasswordLowercasedLetter(passwordFormData)
    const passwordSpecial =
      await validatePasswordSpecialCharacter(passwordFormData)

    const gender = formData.get('gender')
    const terms = formData.get('terms')
    const picture = formData.get('picture')
    const country = formData.get('country') */

    /*  isValidName(name, (isValid) => {
      setErrors('nameErrors', 'first uppercased letter', isValid)
    })

    if (true) {
      dd(addSubmitData({ name: }))
    } */
    /* validateName(entries.name, (isValid) =>
        setNameErrors('first uppercased letter', isValid)
      )
      validateAge(entries.age, (isValid) =>
        setAgeErrors('positive number', isValid)
      )
      validateEMail(entries.email, (isValid) =>
        setEmailErrors('valid email', isValid)
      )

      passwordValidators.forEach(([validate, text]) => {
        validate(entries.password, (isValid) => {
          setPasswordErrors(text, isValid)
        })
        validate(entries['password-confirm'], (isValid) => {
          setPasswordConfirmErrors(text, isValid)
        })
      })
      ;[setPasswordErrors, setPasswordConfirmErrors].forEach((setErrors) => {
        const isMatched = entries.password === entries['password-confirm']
        setErrors('should match', isMatched)
      })
    }

    console.log(getErrorCounter()) */
  }

  console.log({ validateErrors })

  return (
    <main>
      <Form navigate={false} onSubmit={handleSubmit}>
        <fieldset>
          <legend>Uncontrolled Components Form</legend>

          {/* name (validate for first uppercased letter) */}
          <FormInput
            label="Name"
            id="name"
            validateErrors={getErrorList('nameErrors')}
          />

          {/* age (should be number, no negative values) */}
          <FormInput
            label="Age"
            id="age"
            type="number"
            validateErrors={getErrorList('ageErrors')}
          />

          {/* email (validate for email) */}
          <FormInput
            label="E-mail"
            id="email"
            type="email"
            validateErrors={getErrorList('emailErrors')}
          />

          {/* 2 passwords (should match, display the password strength: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character) */}
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

          {/* gender (you can use radio buttons or select control) */}
          <label htmlFor="gender">Gender: TODO</label>
          <select name="gender" id="gender">
            <option value="male">male</option>
            <option value="female">female</option>
          </select>

          {/* accept T&C (checkbox) */}
          <FormInput
            label="Terms & Conditions"
            id="terms"
            type="checkbox"
            validateErrors={getErrorList('termsErrors')}
          />

          {/* input control to upload picture (validate size and extension, allow png jpeg, save in redux store as base64) */}
          <label htmlFor="picture">Picture:</label>
          <input type="file" id="picture" name="picture" />

          {/* autocomplete control to select country (all countries shoudl be stored in the Redux store)  */}
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" name="country" />
        </fieldset>
        <button>submit</button>
      </Form>
    </main>
  )
}
