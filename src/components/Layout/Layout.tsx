import React from "react"
import Navbar from "components/Navbar"
import AppContextProvider from "components/AppContext/AppContext"

type Props = {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <AppContextProvider>
      <Navbar />
      <div className="mx-8 md:mx-10 ">{props.children}</div>
    </AppContextProvider>
  )
}

export default Layout
