import * as yup from "yup"

const addUserSchema = yup.object({
  name: yup.string().required(),
  username: yup.string().required(),
  phone: yup.string().required(),
  website: yup.string().required(),
  email: yup.string().required(),
  address: yup.object({
    street: yup.string().required(),
    suite: yup.string().required(),
    city: yup.string().required(),
    zipcode: yup.string().required()
  })
})

export default addUserSchema
