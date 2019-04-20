import styled from "styled-components"
import { typography, colors } from "../theme.config"

const Text = styled.p`
  ${typography.paragraph};
  color: ${({ light }) => (light ? colors.dark : colors.light)};
  text-align: ${({ centered }) => (centered ? "center" : "left")};
`
export default Text
