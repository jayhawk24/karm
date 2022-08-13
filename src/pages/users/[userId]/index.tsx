import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import UserForm from "components/UserForm/UserForm"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import React, { FC } from "react"
import { getUser } from "services/users"
import { User } from "types/types"

type Props = {
  user: User
}

const User: FC<Props> = ({ user }) => {
  const router = useRouter()
  const { userId } = router.query

  const { data: userData } = useQuery(
    ["user", userId],
    () => getUser(userId as string),
    {
      initialData: user
    }
  )

  const mutation = useMutation<Response, AxiosError, User>((data) =>
    axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, data)
  )

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">Edit User</h1>
      <UserForm mutation={mutation} defaultValues={userData} />
    </div>
  )
}

export default User

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await getUser(context.params?.userId as string)

  return {
    props: {
      user
    }
  }
}
