import * as React from "react"
import { device } from "../styles/device"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.section`
  display: block;
  height: 100%;
  padding: 60px;
  background: ${props => props.theme.accentColor};
`
const Title = styled.h4`
  text-align: center;
  color: ${props => props.theme.primaryColor};
  font-weight: 300;
`

const TitleWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`

const Statement = () => (
  <Container>
    <TitleWrapper>
      <Title>
        I’ve spent +10 years delighting customers by providing them value, while
        doing what I love:
      </Title>
      <Title>
        first as a Content and Product Manager, then as a Software Engineer and
        now as an Engineering Manager.
      </Title>
    </TitleWrapper>
  </Container>
)

export default Statement
