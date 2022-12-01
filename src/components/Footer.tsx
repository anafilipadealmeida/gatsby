import * as React from "react"
import styled from "styled-components"

const FooterLabel = styled.p`
  font-size: 1rem;
`

const Footer = () => {
  return (
    <footer>
      <FooterLabel>
        © {new Date().getFullYear()} &middot; Built with ♥ from Porto
      </FooterLabel>
    </footer>
  )
}

export default Footer
