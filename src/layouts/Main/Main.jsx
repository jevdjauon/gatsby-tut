import React from "react"
import Footer from "../../components/Footer"
import { GlobalStyle } from "../../GlobalStyle"

const Main = props => {
  return (
    <>
      <GlobalStyle />
      {/* global ccomponents here */}
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Main
