import { string } from 'yup'

export const hasSpecialSchema = string()
  .required()
  .matches(/[@$!%*?&]/)
