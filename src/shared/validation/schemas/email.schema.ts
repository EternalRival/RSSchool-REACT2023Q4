import { string } from 'yup'

const message = 'valid email'

export const eMailSchema = string()
  .required(message)
  .matches(/^.+@.+\..+$/i, { message })
