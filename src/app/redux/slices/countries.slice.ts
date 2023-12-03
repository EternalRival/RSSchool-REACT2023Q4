import { createSlice } from '@reduxjs/toolkit'
import { countries } from '@shared/json/countries.json'

type Country = { name: string }

type State = Country[]

const initialState = (): State => countries

const { reducer } = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
})

export const countriesReducer = reducer
