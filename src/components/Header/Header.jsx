import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../../elements/Logo"
import Icon from "../../elements/Icon"
import { twitter } from "../../icons"
import Container from "../../elements/Container"

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

const Nav = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: row;
  justify-content: "center";
`

const locations = {
  eng: [
    { text: "option1", to: "/" },
    { text: "option2", to: "/" },
    { text: "option3", to: "/" },
    { text: "option4", to: "/" },
    { text: "option5", to: "/" },
  ],
}
const Links = {
  padding: "0 20px 0 0",
  color: "white",
}

const Logos = styled.div`
  /* flex-basis: 40%; */
`

const Icons = styled.div`
  flex-basis: 30%;
  /* display: flex;
  flex-direction: row;
  justify-content: "flex-end"; */
  text-align: end;
`

const Header = () => {
  return (
    <Container>
      <Head>
        <Nav>
          {locations.eng.map(({ text, to, i }) => (
            <Link id={i} to={to} style={Links}>
              {text}
            </Link>
          ))}
        </Nav>
        <Logos>
          <Logo link text />
        </Logos>
        <Icons>
          <Icon src={twitter} size={1} />
          <Icon src={twitter} size={1} />
          <Icon src={twitter} size={1} />
          <Icon src={twitter} size={1} />
          <Icon src={twitter} size={1} />
        </Icons>
      </Head>
    </Container>
  )
}

export default Header
