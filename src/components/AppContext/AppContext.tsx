import { useQuery } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import getUsers from "services/users"
import { User } from "types/types"

type Props = {
  children: React.ReactNode
}

interface ContextState {
  users: User[]
  setUsers: (users: User[]) => void
  comments: string[]
  setComments: (comments: string[]) => void
}

export const AppContext = React.createContext({} as ContextState)

const AppContextProvider = (props: Props) => {
  const [users, setUsers] = useState<User[]>([])
  const [comments, setComments] = useState<string[]>([])

  const { data, isFetched } = useQuery(["users"], getUsers, {
    staleTime: 24 * 60 * 60 * 1000
  })

  useEffect(() => {
    if (isFetched && data) {
      setUsers(data)
    }
  }, [isFetched, data])

  return (
    <AppContext.Provider value={{ users, setUsers, comments, setComments }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
