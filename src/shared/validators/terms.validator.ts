import { ValidateFunction, validate } from '@shared/validation/lib/validate'
import { isOnSchema } from '@shared/validation/schemas/is-on.schema'

export const validateTerms: ValidateFunction<string> = (value) =>
  validate(isOnSchema, value, 'should be enabled')
