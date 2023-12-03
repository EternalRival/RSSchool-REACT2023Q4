import { ValidateFunction, validate } from '@shared/validation/lib/validate'
import { isOnOrTrueSchema } from '@shared/validation/schemas/is-on.schema'

export const validateTerms: ValidateFunction<string> = (value) =>
  validate(isOnOrTrueSchema, value, 'should be enabled')
