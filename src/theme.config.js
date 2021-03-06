export const colors = {
  primary: "#F27A54",
  secondary: "#A154F2",
  tertiary: "#6FCF97",
  light: "#fff",
  dark: "#30363D",
  grey: {
    base: "#F2F4F7",
    a: "#3C444C",
    b: "#747D88",
    c: "#CBCFD4",
  },
}

export const fonts = {
  fontFamily: {
    primary: "Zilla Slab",
    secondary: "Montserrat",
  },
}

export const gradients = {
  primary: `linear-gradient(90deg, ${colors.primary} 0%, ${
    colors.secondary
  } 100%);`,
}

export const typography = {
  heading: [
    {
      "font-family": fonts.fontFamily.primary,
      "font-style": "normal",
      "font-weight": "normal",
      "font-size": "44px",
      "line-height": "56px",
    },
    {
      "font-family": fonts.fontFamily.primary,
      "font-style": "normal",
      "font-weight": "normal",
      "font-size": "32px",
      "line-height": "36px",
    },
    {
      "font-family": fonts.fontFamily.primary,
      "font-style": "normal",
      "font-weight": "normal",
      "font-size": "24px",
      "line-height": "28px",
    },
    {
      "font-family": fonts.fontFamily.secondary,
      "font-style": "normal",
      "font-weight": "normal",
      "font-size": "19px",
      "line-height": "24px",
    },
  ],
  paragraph: {
    "font-family": fonts.fontFamily.secondary,
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": "14px",
    "line-height": "22px",
  },
}

export const icons = {
  size: [
    {
      width: "24px",
      height: "21px",
    },
    {
      width: "32px",
      height: "28px",
    },
    {
      width: "64px",
      height: "55px",
    },
    {
      width: "96px",
      height: "82px",
    },
  ],
}

export const breakpoint = {
  xs: "576px",
  m: "768px",
  l: "992px",
  xl: "1500px",
}

export default {
  colors,
  fonts,
  typography,
  icons,
  gradients,
  breakpoint,
}
