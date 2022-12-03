import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%
  margin: 0;
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.backgroundColor};
  opacity: 0.65;
  z-index: -1;
`

const Card = styled.div`
  background: ${props => props.theme.backgroundColor};
  padding: 2.5rem;
`

const TitleWrapper = styled.div`
  margin: 0 auto;
  padding: 8.75rem 0;
  position: relative;
`

const Quote = () => (
  <Container>
    <StaticImage
      alt="tiles"
      src="../images/tiles.jpeg"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: "-1",
      }}
    />
    <Overlay />
    <TitleWrapper>
      <Card>
        <h2>"why was I born if i can't do what I want?"</h2>
        <p>- Ana, 4 years old</p>
      </Card>
    </TitleWrapper>
  </Container>
)

export default Quote
