import React from "react"
import Footer from "../../components/Footer"

const Main = props => {
  return (
    <>
      {/* global ccomponents here */}
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Main
