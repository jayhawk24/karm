import Image from "next/image"
import React from "react"
import { User } from "types/types"

type Props = {
  user: User
}

const UserCard = ({ user }: Props) => {
  const [openMenu, setOpenMenu] = React.useState(false)

  return (
    <div className=" relative max-w-xs bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="flex justify-end ">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="z-20 inline-block text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-1.5"
          type="button"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </button>

        {openMenu && (
          <div
            id="dropdown"
            className=" absolute z-10 w-24 text-base list-none bg-gray-light rounded divide-y divide-gray-100 shadow block"
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="bottom"
          >
            <ul className="py-1" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 "
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 "
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center pb-5">
        <Image
          height={64}
          width={64}
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">{user.name}</h5>
        <span className="text-sm text-gray-500">{user.company.name}</span>
      </div>
    </div>
  )
}

export default UserCard
