import { createGlobalStyle } from "styled-components"
import { colors } from "./theme.config"

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Zilla+Slab&subset=latin-ext');
    body {
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizelegibility;
        background-color: ${colors.dark};
        color: ${colors.light};
    }
`
