import axios from "axios"
import { User } from "types/types"

const getUsers: () => Promise<User[]> = async () => {
  const { data } = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  )
  return data
}

export default getUsers
