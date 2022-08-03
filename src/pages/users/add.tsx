import { useMutation } from "@tanstack/react-query"
import axios from "axios"
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

  const mutation = useMutation((data) => {
    return axios.post("https://jsonplaceholder.typicode.com/users", data)
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate(form)
  }

  return (
    <div>
      Create new user
      <form action="post" onSubmit={handleSubmit}>
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        Username
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        Phone
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        Website
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
        />
        Email
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        Street
        <input
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
        Suite
        <input
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
        City
        <input
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
        ZipCode
        <input
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Add
