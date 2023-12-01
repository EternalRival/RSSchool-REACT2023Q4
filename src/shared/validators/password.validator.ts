import { ValidateFunction, validate } from '@shared/validation/lib/validate'
import { hasLowercasedSchema } from '@shared/validation/schemas/has-lowercased.schema'
import { hasNumberSchema } from '@shared/validation/schemas/has-number.schema'
import { hasSpecialSchema } from '@shared/validation/schemas/has-special.schema'
import { hasUppercasedSchema } from '@shared/validation/schemas/has-uppercased.schema'

export const validatePasswordNumber: ValidateFunction<string> = (value) =>
  validate(hasNumberSchema, value, '1 number')

export const validatePasswordUppercasedLetter: ValidateFunction<string> = (
  value
) => validate(hasUppercasedSchema, value, '1 uppercased')

export const validatePasswordLowercasedLetter: ValidateFunction<string> = (
  value
) => validate(hasLowercasedSchema, value, '1 lowercased')

export const validatePasswordSpecialCharacter: ValidateFunction<string> = (
  value
) => validate(hasSpecialSchema, value, '1 special')

export const validatePasswordMatch = (
  value1: unknown,
  value2: unknown
): boolean => value1 === value2
