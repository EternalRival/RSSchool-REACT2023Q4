import { mixed } from 'yup'

export const validPictureSchema = mixed(
  (input): input is File => input instanceof File
)
  .transform((value) => {
    if (value instanceof File) {
      return value
    }
    if (value instanceof FileList) {
      return value.item(0)
    }
    return value
  })
  .defined()
  .test((file, ctx) => {
    const messages: string[] = []

    if (file) {
      const { name, size } = file

      if (!['jpg', 'png'].includes(name.slice(name.lastIndexOf('.') + 1))) {
        messages.push('should be jpg or png')
      }

      if (size > 1000000) {
        messages.push('should be less than 1000000 bytes')
      }
    } else {
      messages.push('should be a file')
    }

    return messages.length > 0
      ? ctx.createError({ message: messages.join(', ') })
      : true
  })
  .required('should be a file')
