import { string } from 'yup'

export const firstUppercasedSchema = string()
  .matches(/^([A-ZА-Я])/, { message: 'first uppercased letter' })
  .required('required')
