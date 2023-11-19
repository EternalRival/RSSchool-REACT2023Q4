import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { defaultPageSizeValue } from 'shared/constants'

type State = { value: number }

const initialState = (): State => ({
  value: defaultPageSizeValue,
})

const { actions, reducer } = createSlice({
  name: 'itemsPerPage',
  initialState,
  reducers: {
    setItemsPerPage(state, { payload }: PayloadAction<number>) {
      state.value = payload
    },
  },
})

export const itemsPerPageReducer = reducer

export const { setItemsPerPage } = actions
