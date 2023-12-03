import { number } from 'yup'

const message = 'positive number'

export const positiveNumberSchema = number()
  .positive(message)
  .typeError(message)
  .required('required')
