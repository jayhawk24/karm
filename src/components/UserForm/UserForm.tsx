import { yupResolver } from "@hookform/resolvers/yup"
import React, { useMemo } from "react"
import { FieldValues, useForm } from "react-hook-form"
import addUserSchema from "services/schema/addUserSchema"
import Input from "components/Input"
import Label from "components/Label"
import { UseMutationResult } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { User } from "types/types"

type Props = {
  mutation: UseMutationResult<Response, AxiosError<unknown, any>, User, unknown>
  defaultValues?: any
}

const UserForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(addUserSchema),
    defaultValues: useMemo(() => props.defaultValues, [props.defaultValues])
  })

  const onSubmit = handleSubmit((data) => props.mutation.mutate(data))

  return (
    <form className="grid grid-cols-2 gap-5" onSubmit={onSubmit}>
      <div>
        <Label>Name</Label>
        <Input type="text" placeholder="Name" {...register("name")} />
        {errors.name && <p className="text-red-500"> Name is required </p>}
      </div>
      <div>
        <Label>Username</Label>
        <Input type="text" {...register("username")} />
        {errors.username && (
          <p className="text-red-500"> Username is required </p>
        )}
      </div>
      <div>
        <Label>Phone</Label>
        <Input type="text" {...register("phone")} />
        {errors.phone && <p className="text-red-500"> Phone is required </p>}
      </div>
      <div>
        <Label>Website</Label>
        <Input type="text" {...register("website")} />
        {errors.website && (
          <p className="text-red-500"> Website is required </p>
        )}
      </div>
      <div>
        <Label>Email</Label>
        <Input type="text" {...register("email")} />
        {errors.email && <p className="text-red-500"> Email is required </p>}
      </div>
      <div>
        <Label>Street</Label>
        <Input type="text" {...register("address.street")} />
        {errors.address && <p className="text-red-500"> Street is required </p>}
      </div>
      <div>
        <Label>Suite</Label>
        <Input type="text" {...register("address.suite")} />
        {errors.address && <p className="text-red-500"> Suite is required </p>}
      </div>
      <div>
        <Label>City</Label>
        <Input type="text" {...register("address.city")} />
        {errors.address && <p className="text-red-500"> City is required </p>}
      </div>

      <div>
        <Label>ZipCode</Label>
        <Input type="text" {...register("address.zipcode")} />
        {errors.address && (
          <p className="text-red-500"> ZipCode is required </p>
        )}
      </div>
      <button
        type="submit"
        disabled={props.mutation.isLoading}
        className="relative inline-flex items-center justify-center px-6 py-2 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Create
      </button>
    </form>
  )
}

export default UserForm
