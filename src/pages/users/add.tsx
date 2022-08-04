import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import Input from "components/Input"
import Label from "components/Label"
import React, { FC } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import addUserSchema from "services/schema/addUserSchema"

const Add = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(addUserSchema)
  })

  const mutation = useMutation((data) => {
    return axios.post("https://jsonplaceholder.typicode.com/users", data)
  })

  const onSubmit = handleSubmit((data) => mutation.mutate(data))

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">Create new user</h1>
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
          {errors.address && (
            <p className="text-red-500"> Street is required </p>
          )}
        </div>
        <div>
          <Label>Suite</Label>
          <Input type="text" {...register("address.suite")} />
          {errors.address && (
            <p className="text-red-500"> Suite is required </p>
          )}
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
          disabled={mutation.isLoading}
          className="relative inline-flex items-center justify-center px-6 py-2 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default Add
