import React from "react"
import Footer from "../../components/Footer"
import { GlobalStyle } from "../../GlobalStyle"
import Header from "../../components/Header"

const Main = props => {
  return (
    <>
      <GlobalStyle />
      {/* global ccomponents here */}
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Main
