import { string } from 'yup'

export const eMailSchema = string()
  .matches(/^.+@.+\..+$/i, { message: 'valid email' })
  .required('required')
