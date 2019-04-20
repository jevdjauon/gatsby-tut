import React from "react"
import Icon from "../../elements/Icon"
import { twitter } from "../../icons"
import Logo from "../../elements/Logo"
import Text from "../../elements/Text"
import Container from "../../elements/Container"
import List from "../../elements/List"
import styled from "styled-components"

const FooterText = styled.div`
  max-width: calc(100% / 3);
`

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
`

const items = [
  { text: "About us", to: "/about-us" },
  { text: "Nesto", to: "/nesto" },
  { text: "Drugo", to: "/drugo" },
]

const iconItems = [
  { text: "About us", to: "/about-us", icon: twitter },
  { text: "Nesto", to: "/nesto", icon: twitter },
  { text: "Drugo", to: "/drugo", icon: twitter },
]

const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <FooterText>
          <Logo />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
            fugiat. Earum iure facilis nobis ducimus dolore voluptates. Cumque
            odio quod nulla corporis molestiae. Distinctio assumenda recusandae
            accusantium quae, dolorum aliquam!
          </Text>
        </FooterText>

        <List title="Company" items={items} />
        <List title="Resources" items={items} />
        <List title="Support" items={items} />
        <List title="Social" items={iconItems} />
      </FooterWrapper>
    </Container>
  )
}

export default Footer
