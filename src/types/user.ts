export interface IUser {
  address: IUserAddress
  id: number
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  }
  phone: string
  __v: number
}

interface IUserAddress {
  geolocation: {
    lat: string
    long: string
  }
  city: string
  street: string
  number: number
  zipcode: string
}
