import * as React from "react"
import styled from "styled-components"
import DarkModeSwitcher from "./DarkModeSwitcher"

const FooterLabel = styled.p`
  text-align: center;
  font-size: 0.875rem;
  margin: 3rem 0;
`

const FooterWrapper = styled.footer`
  position: relative;
`

const SwitcherWrapper = styled.div`
  right: 40px;
  bottom: 40px;
  position: absolute;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLabel>
        © {new Date().getFullYear()} &middot; Built with ♥ from Porto
      </FooterLabel>
      <SwitcherWrapper>
        <DarkModeSwitcher />
      </SwitcherWrapper>
    </FooterWrapper>
  )
}

export default Footer
