import React, { useContext } from "react"
import { AppContext } from "components/AppContext/AppContext"

type Props = {}

const Users = (props: Props) => {
  const { users } = useContext(AppContext)
  return (
    <div>
      Users
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default Users
