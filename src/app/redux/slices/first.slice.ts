import { PayloadAction, createSlice } from '@reduxjs/toolkit'

/* 
name (validate for first uppercased letter)
age (should be number, no negative values)
email (validate for email)
2 passwords (should match, display the password strength: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character)
gender (you can use radio buttons or select control)
accept T&C (checkbox)
input control to upload picture (validate size and extension, allow png jpeg, save in redux store as base64)
autocomplete control to select country (all countries shoudl be stored in the Redux store) Form should contain labels, which should be connected with inouts (look at htmlFor)
*/

const enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
}

const enum Country {
  COUNTRY_01 = 'COUNTRY_01',
}

type State = {
  name: string
  age: number
  email: string
  password: string
  gender: Gender
  acceptTermsAndConditions: boolean
  picture: string //base64
  country: Country
}

const initialState = (): State => ({
  name: 'default',
  age: 1,
  email: 'default',
  password: 'default',
  gender: Gender.MALE,
  acceptTermsAndConditions: true,
  picture: 'default',
  country: Country.COUNTRY_01,
})

const { actions, reducer } = createSlice({
  name: 'firstForm',
  initialState,
  reducers: {
    setFirstForm(state, { payload }: PayloadAction<State>) {
      state.name = payload.name
      state.age = payload.age
      state.email = payload.email
      state.password = payload.password
      state.gender = payload.gender
      state.acceptTermsAndConditions = payload.acceptTermsAndConditions
      state.picture = payload.picture
      state.country = payload.country
    },
  },
})

export const firstReducer = reducer

export const { setFirstForm } = actions
