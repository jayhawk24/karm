import axios from "axios"
import { Post } from "types/types"

export const getPosts: (userId: string) => Promise<Post[]> = async (userId) => {
  const { data } = await axios.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts/?userId=${userId}`
  )
  return data
}
