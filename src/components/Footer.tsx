import * as React from "react"
import styled from "styled-components"

const FooterLabel = styled.p`
  text-align: center;
  font-size: 0.875rem;
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
