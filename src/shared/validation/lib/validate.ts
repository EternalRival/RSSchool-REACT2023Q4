import { Schema } from 'yup'

export type ValidateReturnType<T> = Promise<{
  message: string
  isValid: boolean
  value: T | null
}>

export type ValidateFunction<T> = (value: unknown) => ValidateReturnType<T>

export const validate = async <T extends Schema>(
  schema: T,
  value: unknown,
  message: string = 'invalid value'
): ValidateReturnType<T['__outputType']> => {
  const isValid = await schema.isValid(value)
  return {
    message,
    isValid,
    value: isValid ? schema.cast(value) : null,
  }
}
