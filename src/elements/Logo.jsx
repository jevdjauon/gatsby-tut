import React from "react"
import InlineSVG from "svg-inline-react"
import { icons, colors, typography } from "../theme.config"
import styled, { css } from "styled-components"
import { logo, logoWithText } from "../icons"
import { Link } from "gatsby"

const LogoWrapper = styled.span`
  svg {
    ${({ text }) =>
      text
        ? css`
            width: 117.36px;
            height: 40px;
          `
        : css`
            width: 40px;
            height: 40px;
          `};
  }
`

const Logo = props => {
  return (
    <>
      {props.link ? (
        <Link to="/">
          <LogoWrapper {...props}>
            <InlineSVG src={props.text ? logoWithText : logo} />
          </LogoWrapper>
        </Link>
      ) : (
        <LogoWrapper {...props}>
          <InlineSVG src={props.text ? logoWithText : logo} />
        </LogoWrapper>
      )}
    </>
  )
}

export default Logo
