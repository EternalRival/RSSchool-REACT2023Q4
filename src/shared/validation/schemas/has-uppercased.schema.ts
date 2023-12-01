import { string } from 'yup'

export const hasUppercasedSchema = string().required().matches(/[A-Z]/)
