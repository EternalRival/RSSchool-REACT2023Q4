import { string } from 'yup'

export const firstUppercasedSchema = string()
  .matches(/^([A-Z])/, { message: 'first uppercased letter' })
  .required()
