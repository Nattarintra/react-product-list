import React from "react"
import Navbar from "./../../components/navbar/Navbar"
const MainLayout = ({ props }) => {
  return (
    <div>
      <Navbar />
      {props}
    </div>
  )
}
export default MainLayout
