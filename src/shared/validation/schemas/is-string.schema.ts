import { string } from 'yup'

export const isStringSchema = string()
  .typeError('should be a string')
  .required('required')
