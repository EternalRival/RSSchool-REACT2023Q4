import { ValidateFunction, validate } from '@shared/validation/lib/validate'
import { firstUppercasedSchema } from '@shared/validation/schemas/first-uppercased.schema'

export const validateName: ValidateFunction<string> = (value) =>
  validate(firstUppercasedSchema, value, 'first uppercased letter')
