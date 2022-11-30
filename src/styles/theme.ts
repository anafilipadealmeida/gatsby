const { white, black, grayDark } = require("./colors.ts")
const styledComponents = require("styled-components")
const { createGlobalStyle } = styledComponents

const lightTheme = {
  backgroundColor: white,
  primaryColor: grayDark,
}

const darkTheme = {
  backgroundColor: grayDark,
  primaryColor: white,
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
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.primaryColor};
    transition: background 0.3s ease-out;
  }

  h1 {
    margin: 0;
    font-weight: 700;
    font-size: 2.75rem;
    color: ${props => props.theme.primaryColor};
  }

  h2 {
    margin: 0 0 2.5rem;
    font-weight: 700;
    font-size: 2.5rem;
    color: ${props => props.theme.primaryColor};
  }

  p {
    margin: 0 0 1rem;
    font-weight: 300;
    font-size: 1.5rem;
    color: ${props => props.theme.primaryColor};
  }
`

module.exports = {
  darkTheme,
  lightTheme,
  GlobalStyle,
}
