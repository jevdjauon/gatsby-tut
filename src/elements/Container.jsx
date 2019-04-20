import styled from "styled-components"
import { breakpoint } from "../theme.config"

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  height: ${({ screen }) => (screen ? "100vh" : "auto")};
  @media screen and (min-width: ${breakpoint.xs}) {
    max-width: 576px;
  }
  @media screen and (min-width: ${breakpoint.m}) {
    max-width: 768px;
  }
  @media screen and (min-width: ${breakpoint.l}) {
    max-width: 992px;
  }
  @media screen and (min-width: ${breakpoint.xl}) {
    max-width: 1500px;
  }
`

export default Container
