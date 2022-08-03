import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import Input from "components/Input"
import Label from "components/Label"
import React, { useState } from "react"

type Props = {}

const Add = (props: Props) => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    phone: "",
    website: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: ""
    }
  })

  const { isLoading } = useMutation((data) => {
    return axios.post("https://jsonplaceholder.typicode.com/users", data)
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("submitting")
    // mutation.mutate(form)
  }

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">Create new user</h1>
      <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit}>
        <div>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
        </div>
        <div>
          <Label>Phone</Label>
          <Input
            type="text"
            name="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div>
          <Label>Website</Label>
          <Input
            type="text"
            name="website"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <Label>Street</Label>
          <Input
            type="text"
            name="street"
            value={form.address.street}
            onChange={(e) =>
              setForm({
                ...form,
                address: { ...form.address, street: e.target.value }
              })
            }
          />
        </div>
        <div>
          <Label>Suite</Label>
          <Input
            type="text"
            name="suite"
            value={form.address.suite}
            onChange={(e) =>
              setForm({
                ...form,
                address: { ...form.address, suite: e.target.value }
              })
            }
          />
        </div>
        <div>
          <Label>City</Label>
          <Input
            type="text"
            name="city"
            value={form.address.city}
            onChange={(e) =>
              setForm({
                ...form,
                address: { ...form.address, city: e.target.value }
              })
            }
          />
        </div>

        <div>
          <Label>ZipCode</Label>
          <Input
            type="text"
            name="zipcode"
            value={form.address.zipcode}
            onChange={(e) =>
              setForm({
                ...form,
                address: { ...form.address, zipcode: e.target.value }
              })
            }
          />
        </div>
        <button
          type="submit"
          disabled={!isLoading}
          className="relative inline-flex items-center justify-center px-6 py-2 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default Add
