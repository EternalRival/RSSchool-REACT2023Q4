import { string } from 'yup'

export const isOnSchema = string().required().matches(/on/i)
