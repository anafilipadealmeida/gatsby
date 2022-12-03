const { white, black, grayDark, pink } = require("./colors.ts")
const styledComponents = require("styled-components")
const { createGlobalStyle } = styledComponents

const lightTheme = {
  backgroundColor: white,
  primaryColor: grayDark,
  accentColor: pink,
  linkColor: grayDark,
  linkHoverColor: grayDark,
}

const darkTheme = {
  backgroundColor: black,
  primaryColor: white,
  accentColor: pink,
  linkColor: white,
  linkHoverColor: white,
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
    margin: 0 0 2rem;
    font-weight: 200;
    font-size: 1.125rem;
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
