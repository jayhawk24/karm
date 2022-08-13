import axios from "axios"
import { Todo } from "types/types"

export const getTodos: (userId: string) => Promise<Todo[]> = async (userId) => {
  const { data } = await axios.get<Todo[]>(
    `https://jsonplaceholder.typicode.com/todos/?userId=${userId}`
  )
  return data
}
