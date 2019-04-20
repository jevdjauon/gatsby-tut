import React from "react"
import Icon from "../../elements/Icon"
import { twitter } from "../../icons"
import Logo from "../../elements/Logo"
import Container from "../../elements/Container"

const Footer = () => {
  return (
    <Container>
      <h1>Footer</h1>
      <Icon src={twitter} size={1} text="Lorem ipsum" />
      <Logo />
    </Container>
  )
}

export default Footer
