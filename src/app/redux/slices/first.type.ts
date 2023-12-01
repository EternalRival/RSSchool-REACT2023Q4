import { Country } from './first.enum'

export type SubmitData = {
  name: string | null
  age: number | null
  email: string | null
  password: string | null
  gender: string | null
  terms: boolean | null
  picture: string | null //base64
  country: Country | null
}
