import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SubmitData } from './first.type'

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
