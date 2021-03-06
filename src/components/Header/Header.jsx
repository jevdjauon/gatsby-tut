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
  align-items: center;
  width: 100%;
  height: 80px;
`

const Nav = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: row;
  justify-content: "center";
`

const locations = {
  eng: [
    { text: "home", to: "/" },
    { text: "work", to: "/work" },
    { text: "about", to: "/about" },
    { text: "blog", to: "/blog" },
    { text: "contact", to: "/contract" },
  ],
}
const Links = {
  padding: "0 20px 0 0",
  color: "white",
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: "10px",
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
    <div style={{ background: "#3c444c" }}>
      <Container>
        <Head>
          <Nav>
            {locations.eng.map(({ text, to }) => (
              <Link key={to} to={to} style={Links}>
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
    </div>
  )
}

export default Header
