import { ValidateFunction, validate } from '@shared/validation/lib/validate'
import { isStringSchema } from '@shared/validation/schemas/is-string.schema'

export const validateGender: ValidateFunction<string> = (value) =>
  validate(isStringSchema, value)
