import { ValidateFunction, validate } from '@shared/validation/lib/validate'
import { validPasswordSchema } from '../schemas/valid-password.schema'

export const validatePassword: ValidateFunction<string> = (value) =>
  validate(
    validPasswordSchema,
    value,
    '1 number, 1 uppercased, 1 lowercased, 1 special'
  )

export const validatePasswordMatch = (
  value1: unknown,
  value2: unknown
): boolean => value1 === value2
