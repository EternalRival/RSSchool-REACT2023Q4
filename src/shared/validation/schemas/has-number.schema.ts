import { string } from 'yup'

export const hasNumberSchema = string().required().matches(/\d/)
