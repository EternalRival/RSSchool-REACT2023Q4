import { number } from 'yup'

export const positiveNumberSchema = number().required().positive()
