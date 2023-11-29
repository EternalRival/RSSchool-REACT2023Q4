import { configureStore } from '@reduxjs/toolkit'
import { firstReducer } from './slices/first.slice'

const store = configureStore({
  reducer: {
    firstForm: firstReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
