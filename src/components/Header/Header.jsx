import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
}

const Logo = styled.div`
  /* flex-basis: 40%; */
`

const Icons = styled.div`
  flex-basis: 30%;
  /* display: flex;
  flex-direction: row;
  justify-content: "center"; */
  text-align: end;
`

const Header = () => {
  return (
    <Head>
      <Nav>
        {locations.eng.map(({ text, to, i }) => (
          <Link id={i} to={to} style={Links}>
            {text}
          </Link>
        ))}
      </Nav>
      <Logo>Logo</Logo>
      <Icons>icons</Icons>
    </Head>
  )
}

export default Header
