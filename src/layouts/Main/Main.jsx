import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const Main = props => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Main
