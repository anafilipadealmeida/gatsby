import * as React from "react"
import styled from "styled-components"
import DarkModeSwitcher from "./DarkModeSwitcher"

const FooterLabel = styled.p`
  text-align: center;
  font-size: 0.875rem;
  margin: 3rem 0 0;
`

const SwitcherWrapper = styled.div`
  margin: 1rem 0 3rem;
  text-align: center;
`

const Footer = () => {
  return (
    <footer>
      <FooterLabel>
        © {new Date().getFullYear()} &middot; Built with ♥ from Porto
      </FooterLabel>
      <SwitcherWrapper>
        <DarkModeSwitcher />
      </SwitcherWrapper>
    </footer>
  )
}

export default Footer
