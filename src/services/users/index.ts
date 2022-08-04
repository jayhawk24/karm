import axios, { AxiosResponse } from "axios"
import { User } from "types/types"

export const getUsers: () => Promise<User[]> = async () => {
  const { data } = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  )
  return data
}
