import { isObject } from './is-object'

describe('isObject', () => {
  it('isObject return true properly', () => {
    expect(isObject({})).toBeTruthy()
  })

  it('isObject return false properly', () => {
    expect(isObject(1)).toBeFalsy()
    expect(isObject(null)).toBeFalsy()
  })
})
