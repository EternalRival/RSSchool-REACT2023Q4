import { string } from 'yup'

export const isOnOrTrueSchema = string()
  .required()
  .matches(/(on|true)/i, { message: 'should be enabled' })
