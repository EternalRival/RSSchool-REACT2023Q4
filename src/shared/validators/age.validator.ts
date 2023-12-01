import { ValidateFunction, validate } from '@shared/validation/lib/validate'
import { positiveNumberSchema } from '../validation/schemas/positive-number.schema'

export const validateAge: ValidateFunction<number> = (value) =>
  validate(positiveNumberSchema, value, 'positive number')