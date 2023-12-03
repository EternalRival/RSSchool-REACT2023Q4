import { eMailSchema } from '@shared/validation/schemas/email.schema'
import { firstUppercasedSchema } from '@shared/validation/schemas/first-uppercased.schema'
import { isOnOrTrueSchema } from '@shared/validation/schemas/is-on-or-true.schema'
import { isStringSchema } from '@shared/validation/schemas/is-string.schema'
import { positiveNumberSchema } from '@shared/validation/schemas/positive-number.schema'
import { validPasswordSchema } from '@shared/validation/schemas/valid-password.schema'
import { validPictureSchema } from '@shared/validation/schemas/valid-picture.schema'
import { ObjectSchema, object } from 'yup'
import { FormFields } from '../types/form-fields.type'

export const composedFormSchema: ObjectSchema<FormFields> = object().shape({
  name: firstUppercasedSchema,
  age: positiveNumberSchema,
  email: eMailSchema,
  password: validPasswordSchema,
  'password-confirm': validPasswordSchema,
  gender: isStringSchema,
  terms: isOnOrTrueSchema,
  picture: validPictureSchema,
  country: isStringSchema,
})
