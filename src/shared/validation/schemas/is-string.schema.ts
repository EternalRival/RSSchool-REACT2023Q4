import { string } from 'yup'

export const isStringSchema = string()
  .required()
  .typeError('should be a string')
