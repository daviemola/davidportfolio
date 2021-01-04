import React from "react"
import "./bootstrap.min.css"
import Footer from "./Global/Footer"
import Header from "./Global/Header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
