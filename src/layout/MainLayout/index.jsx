import React from "react"
import Navbar from "@components/navbar/Navbar"
const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
export default MainLayout
