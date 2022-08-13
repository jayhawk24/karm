import React from "react"
import Navbar from "components/Navbar"

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Navbar />
      <div className="mx-8 md:mx-10 ">{props.children}</div>
    </>
  )
}

export default Layout
