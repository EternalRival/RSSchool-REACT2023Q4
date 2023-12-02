import { validateAge } from '@shared/validation/validators/age.validator'
import { validateEMail } from '@shared/validation/validators/email.validator'
import { validateGender } from '@shared/validation/validators/gender.validator'
import { validateName } from '@shared/validation/validators/name.validator'
import {
  validatePasswordLowercasedLetter,
  validatePasswordMatch,
  validatePasswordNumber,
  validatePasswordSpecialCharacter,
  validatePasswordUppercasedLetter,
} from '@shared/validation/validators/password.validator'
import {
  validatePictureExtension,
  validatePictureSize,
} from '@shared/validation/validators/picture.validator'
import { validateTerms } from '@shared/validation/validators/terms.validator'
import { SubmitData } from '../../app/redux/slices/first.slice'
import { validateCountry } from '@shared/validation/validators/country.validator'
import { fileToBase64 } from './file-converter'

type ValidateFormFunction = (
  form: HTMLFormElement,
  initialErrors: Map<string, Set<string>>
) => Promise<{ errors: Map<string, Set<string>>; submitData: SubmitData }>

export const validateForm: ValidateFormFunction = async (
  form,
  initialErrors
) => {
  const formData = new FormData(form)
  const errors = new Map(initialErrors)
  const setErrors = (key: string, text: string, isValid: boolean): void => {
    errors.get(key)?.[isValid ? 'delete' : 'add'](text)
  }

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

  const terms = await validateTerms(formData.get('terms'))
  setErrors('termsErrors', terms.message, terms.isValid)

  const pictureFormData = formData.get('picture')

  const pictureChecks = await Promise.all([
    validatePictureSize(pictureFormData),
    validatePictureExtension(pictureFormData),
  ])
  pictureChecks.forEach(({ message, isValid }) => {
    setErrors('pictureErrors', message, isValid)
  })

  const picture = {
    value:
      pictureChecks.every(({ isValid }) => isValid) &&
      pictureChecks[0].value instanceof File
        ? await fileToBase64(pictureChecks[0].value)
        : null,
  }

  const country = await validateCountry(formData.get('country'))

  return {
    errors,
    submitData: {
      name: name.value,
      age: age.value,
      email: email.value,
      password: password.value,
      gender: gender.value,
      terms: terms.isValid,
      picture: picture.value,
      country: country.value,
    },
  }
}
