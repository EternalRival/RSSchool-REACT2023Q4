import { string } from 'yup'

export const hasLowercasedSchema = string().required().matches(/[a-z]/)
