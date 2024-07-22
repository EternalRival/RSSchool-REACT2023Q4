import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type State = {
  isFetching: boolean
  isUninitialized: boolean
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
}

const initialState = (): State => ({
  isFetching: false,
  isUninitialized: false,
  isError: false,
  isLoading: false,
  isSuccess: false,
})

const { actions, reducer } = createSlice({
  name: 'detailsFlag',
  initialState,
  reducers: {
    setDetailsFlags(state, { payload }: PayloadAction<State>) {
      state.isFetching = payload.isFetching
      state.isUninitialized = payload.isUninitialized
      state.isError = payload.isError
      state.isLoading = payload.isLoading
      state.isSuccess = payload.isSuccess
    },
  },
})

export const detailsFlagsReducer = reducer

export const { setDetailsFlags } = actions
