import { ValidateFunction, validate } from '@shared/validation/lib/validate'
import { isStringSchema } from '@shared/validation/schemas/is-string.schema'

export const validateCountry: ValidateFunction<string> = (value) =>
  validate(isStringSchema, value)
