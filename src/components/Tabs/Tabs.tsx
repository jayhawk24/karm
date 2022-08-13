import Link from "next/link"
import { useRouter } from "next/router"
import React, { FC } from "react"

const Tabs = () => {
  const router = useRouter()
  const { userId } = router.query

  const active = router.pathname.split("/")?.[3]

  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 mb-5">
      <li className={`mr-2 text-xl ${active === "posts" && "font-bold"}`}>
        <Link
          href={`/users/${userId}/posts`}
          className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active "
        >
          Posts
        </Link>
      </li>
      <li className={`mr-2 text-xl ${active === "todos" && "font-bold"}`}>
        <Link
          href={`/users/${userId}/todos`}
          className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 "
        >
          Todos
        </Link>
      </li>
    </ul>
  )
}

export default Tabs
