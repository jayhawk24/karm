import React, { RefObject } from "react"
import Link from "next/link"

type Props = {}

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const links = [
    { href: "/", label: "Home" },
    { href: "/users", label: "Users" },
    { href: "/posts", label: "Posts" }
  ]

  const renderLinks = () =>
    links.map((link) => (
      <Link href={link.href} key={link.label}>
        <p className="text-white font-semibold cursor-pointer ">{link.label}</p>
      </Link>
    ))

  return (
    <nav>
      <div className="hidden lg:flex md:flex w-full bg-purple font-semibold justify-around">
        {renderLinks()}
      </div>
      <div className="flex sm:hidden fixed top-5 right-5">
        <div className="relative">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } flex flex-col p-5 rounded-lg bg-purple absolute right-0`}
          >
            {renderLinks()}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
