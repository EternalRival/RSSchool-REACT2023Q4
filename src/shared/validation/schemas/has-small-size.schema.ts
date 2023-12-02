import { mixed } from 'yup'

export const hasSmallSizeSchema = mixed(
  (input): input is File => input instanceof File
)
  .required()
  .test((input) => input.size < 1000000)
