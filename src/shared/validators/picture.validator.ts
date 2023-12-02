import { ValidateFunction, validate } from '@shared/validation/lib/validate'
import { hasSmallSizeSchema } from '@shared/validation/schemas/has-small-size.schema'
import { isJpgOrPngSchema } from '@shared/validation/schemas/is-jpg-or-png.schema'

export const validatePictureSize: ValidateFunction<unknown> = (value) => {
  return validate(hasSmallSizeSchema, value, 'should be smaller (<1MB)')
}

export const validatePictureExtension: ValidateFunction<unknown> = (value) => {
  return validate(isJpgOrPngSchema, value, 'should be jpg or png')
}
