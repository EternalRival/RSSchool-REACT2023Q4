import { mixed } from 'yup'

export const isJpgOrPngSchema = mixed(
  (input): input is File => input instanceof File
)
  .required()
  .test(({ name }) => {
    const lastDot = name.lastIndexOf('.')
    const ext = name.slice(lastDot + 1)
    const extensions = ['jpg', 'png']
    return extensions.includes(ext)
  })
