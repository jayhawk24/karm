import React, { useContext } from "react"
import { AppContext } from "components/AppContext/AppContext"
import UserCard from "components/UserCard/UserCard"
import Link from "next/link"

type Props = {}

const Users = (props: Props) => {
  const { users } = useContext(AppContext)
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-semibold text-xl my-5">Users</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}

        <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          {/* add new user button */}
          <div className="p-12 flex justify-center">
            <Link href="/users/add">
              <button className="z-20 inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5">
                <svg
                  className="h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
