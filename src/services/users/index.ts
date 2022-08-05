import axios, { AxiosResponse } from "axios"
import { User } from "types/types"

export const getUsers: () => Promise<User[]> = async () => {
  const { data } = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  )
  return data
}

export const getUser: (id: string) => Promise<User> = async (id) => {
  const { data } = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  return data
}

export const deleteUser: (id: string) => Promise<AxiosResponse> = async (
  id
) => {
  const { data } = await axios.delete(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  return data
}
