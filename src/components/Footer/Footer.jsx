import React from "react"
import Icon from "../../elements/Icon"
import { twitter } from "../../icons"
import Logo from "../../elements/Logo"

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
      <Icon src={twitter} size={1} text="Lorem ipsum" />
      <Logo />
    </div>
  )
}

export default Footer
