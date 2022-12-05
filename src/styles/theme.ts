const { white, black, pink, blue } = require("./colors.ts")
const styledComponents = require("styled-components")
const { createGlobalStyle } = styledComponents

const lightTheme = {
  backgroundColor: white,
  sectionBackgroundColor: blue,
  sectionTitleColor: white,
  cardBackgroundColor: white,
  heroSmallScreenTextColor: white,
  heroSmallScreenTitleColor: white,
  menuSmallScreenTextColor: white,
  primaryColor: black,
  accentColor: blue,
  linkColor: black,
  linkHoverColor: blue,
  overlayColor: blue,
  darkModeSwitcher: {
    iconColor: black,
    backgroundColor: white,
    backgroundHoverColor: blue,
    knobColor: black,
  },
  switcher: {
    backgroundColor: white,
    backgroundHoverColor: blue,
    knobColor: black,
  },
}

const darkTheme = {
  backgroundColor: black,
  sectionBackgroundColor: black,
  sectionTitleColor: white,
  cardBackgroundColor: black,
  heroSmallScreenTextColor: white,
  heroSmallScreenTitleColor: pink,
  menuSmallScreenTextColor: white,
  primaryColor: white,
  accentColor: pink,
  linkColor: white,
  linkHoverColor: pink,
  overlayColor: black,
  darkModeSwitcher: {
    iconColor: white,
    backgroundColor: black,
    backgroundHoverColor: pink,
    knobColor: white,
  },
  switcher: {
    backgroundColor: black,
    backgroundHoverColor: pink,
    knobColor: white,
  },
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;

    @media (max-width: 768px) {
      font-size: 70%;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 60%;
    }

    @media (min-width: 1025px) and (max-width: 1300px) {
      font-size: 80%;
    }
  }

  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
  }
  
  body {
    font-family: 'Antonio', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.primaryColor};
    transition: background 0.3s ease-out;
  }

  h1 {
    margin: 0;
    font-weight: 900;
    font-size: 5.5rem;
    color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
  }

  h2 {
    margin: 0 0 2.625rem;
    font-weight: 700;
    font-size: 2rem;
    color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
  }

  h3 {
    margin: 0 0 2.5rem;
    font-weight: 600;
    font-size: 1.5rem;
    color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
  }

  h4 {
    margin: 2.5rem 0;
    font-weight: 600;
    font-size: 1.5rem;
    color: ${props => props.theme.accentColor};
    text-transform: uppercase;
  }

  p {
    margin: 0;
    font-weight: 200;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: ${props => props.theme.primaryColor};
  }

  button {
    outline: none;
    text-decoration: none;
    border: 0;
  }

  ul {
    margin: 0;
    list-style-type: none;
  }

  a {
    color: ${props => props.theme.linkColor};
    cursor: pointer;
    outline: none;
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.linkHoverColor};
    }
    &:visited {
      color: ${props => props.theme.linkHoverColor};
    }
  }
`

module.exports = {
  darkTheme,
  lightTheme,
  GlobalStyle,
}
