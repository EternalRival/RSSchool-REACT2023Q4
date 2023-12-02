import { ValidateFunction, validate } from '@shared/validation/lib/validate'
import { eMailSchema } from '../schemas/email.schema'

export const validateEMail: ValidateFunction<string> = (value) =>
  validate(eMailSchema, value, 'valid email')
