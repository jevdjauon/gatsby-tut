import React from "react"
import InlineSVG from "svg-inline-react"
import { icons, colors, typography, gradients } from "../theme.config"
import styled, { css } from "styled-components"

const IconWrapper = styled.span`
  ${({ text }) =>
    text &&
    css`
      display: flex;
      align-items: center;
    `}
  ${({ size }) =>
    size > 0 &&
    css`
      align-items: flex-start;
    `}
  svg {
    ${({ size }) => icons.size[size - 1]};
    ${({ text }) =>
      text &&
      css`
        margin-right: 0.5em;
      `}
    path {
      fill: ${colors.primary};
    }
  }
`

const IconText = styled.span`
  ${typography.paragraph};
  color: ${colors.grey.base};
  opacity: 0.85;
`

const Icon = props => {
  return (
    <IconWrapper {...props}>
      <InlineSVG src={props.src} />
      {props.text && <IconText>{props.text}</IconText>}
    </IconWrapper>
  )
}

export default Icon
