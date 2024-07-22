import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type State = {
  isFetching: boolean
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  isUninitialized: boolean
}

const initialState = (): State => ({
  isFetching: false,
  isUninitialized: false,
  isError: false,
  isLoading: false,
  isSuccess: false,
})

const { actions, reducer } = createSlice({
  name: 'listFlags',
  initialState,
  reducers: {
    setListFlags(state, { payload }: PayloadAction<State>) {
      state.isFetching = payload.isFetching
      state.isUninitialized = payload.isUninitialized
      state.isError = payload.isError
      state.isLoading = payload.isLoading
      state.isSuccess = payload.isSuccess
    },
  },
})

export const listFlagsReducer = reducer

export const { setListFlags } = actions
