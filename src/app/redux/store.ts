import { configureStore } from '@reduxjs/toolkit'
import { countriesReducer } from './slices/countries.slice'
import { submitHistoryReducer } from './slices/first.slice'

export const store = configureStore({
  reducer: {
    submitHistory: submitHistoryReducer,
    countries: countriesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
