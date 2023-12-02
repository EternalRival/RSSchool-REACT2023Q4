import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type SubmitData = {
  name: string | null
  age: number | null
  email: string | null
  password: string | null
  gender: string | null
  terms: boolean | null
  picture: string | null
  country: string | null
}

type State = SubmitData[]

const initialState = (): State => []

const { actions, reducer } = createSlice({
  name: 'firstForm',
  initialState,
  reducers: {
    addSubmitData(state, { payload }: PayloadAction<SubmitData>) {
      state.push(payload)
    },
  },
})

export const firstReducer = reducer

export const { addSubmitData } = actions
