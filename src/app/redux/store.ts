import { configureStore } from '@reduxjs/toolkit'
import { countriesReducer } from './slices/countries.slice'
import { firstReducer } from './slices/first.slice'

export const store = configureStore({
  reducer: {
    firstForm: firstReducer,
    countries: countriesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
