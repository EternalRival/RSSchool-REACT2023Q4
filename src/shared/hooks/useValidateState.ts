import { useState } from 'react'

export const useValidateState: (
  initialState: string[]
) => [string[], (value: string, isValid: boolean) => void] = (initialState) => {
  const [state, setState] = useState(new Set(initialState))

  const addError = (value: string, isValid: boolean): void => {
    setState((prevState) => {
      const state = new Set(prevState)
      if (isValid) {
        state.delete(value)
        return state
      }
      return state.add(value)
    })
  }

  return [Array.from(state.values()), addError]
}
