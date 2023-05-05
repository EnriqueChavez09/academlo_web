import { CountryInterface } from './countryInterface'

export interface UserInterface {
  id: number
  fullName?: string
  photo: string
  country: CountryInterface
}
