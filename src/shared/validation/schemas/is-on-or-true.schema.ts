import { string } from 'yup'

export const isOnOrTrueSchema = string()
  .transform((value: string) => (value === 'on' ? 'true' : value))
  .matches(/true/i, { message: 'should be enabled' })
  .required('required')
