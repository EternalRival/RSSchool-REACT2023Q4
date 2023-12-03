import { string } from 'yup'

export const passwordChecklist = new Map([
  [/\d/, '1 number'],
  [/[A-ZА-Я]/, '1 uppercased'],
  [/[a-zа-я]/, '1 lowercased'],
  [/[!"№;%:?*()@#$^&.,~`{}<>'_\-+=[/|\\\]]/, '1 special'],
])

export const validPasswordSchema = string()
  .defined()
  .test((value, ctx) => {
    const messages: string[] = []

    passwordChecklist.forEach((message, regex) => {
      if (!regex.test(value)) {
        messages.push(message)
      }
    })

    if (ctx.path.endsWith('-confirm')) {
      const originalPath = ctx.path.replace(/-confirm$/, '')
      const originalValue = ctx.parent[originalPath]
      if (originalValue !== value) {
        messages.push('must match')
      }
    }

    return messages.length > 0
      ? ctx.createError({ message: messages.join(', ') })
      : true
  })
  .required('required')
