import React, { FC } from "react"
import axios, { AxiosError } from "axios"
import { useMutation } from "@tanstack/react-query"
import UserForm from "components/UserForm/UserForm"
import { User } from "types/types"

const Add = () => {
  const mutation = useMutation<Response, AxiosError, User>((data) =>
    axios.post("https://jsonplaceholder.typicode.com/users", data)
  )

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">Create new user</h1>
      <UserForm mutation={mutation} />
    </div>
  )
}

export default Add
