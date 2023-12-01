import { string } from 'yup'

export const firstUppercasedSchema = string()
  .required()
  .matches(/^([A-Z])/)
