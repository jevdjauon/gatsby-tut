import React from "react"
import Icon from "../../elements/Icon"
import { twitter } from "../../icons"
import Logo from "../../elements/Logo"
import Text from "../../elements/Text"

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
      <Icon src={twitter} size={1} text="Lorem ipsum" />
      <Logo />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, fugiat.
        Earum iure facilis nobis ducimus dolore voluptates. Cumque odio quod
        nulla corporis molestiae. Distinctio assumenda recusandae accusantium
        quae, dolorum aliquam!
      </Text>
    </div>
  )
}

export default Footer
