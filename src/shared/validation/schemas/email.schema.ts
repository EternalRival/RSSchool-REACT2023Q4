import { string } from 'yup'

export const eMailSchema = string()
  .required()
  .matches(/^.+@.+\..+$/i)
