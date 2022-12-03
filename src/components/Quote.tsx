import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%
  margin: 0;
  height: 100%;
  align-items: center;
  height: 100%;
  position: relative;
`

const LeftSide = styled.div`
  width: 50%;
  padding-top: 100px;
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
  width: 62%;
  margin: 0 auto;
  padding: 140px 0;
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
      <StaticImage
        alt="tiles"
        src="../images/child_ana.png"
        style={{
          position: "absolute",
          right: "-26px",
        }}
      />
      <Card>
        <h2>"why was I born if i can't do what I want?"</h2>
        <p>- Ana, 4 years old</p>
      </Card>
    </TitleWrapper>
  </Container>
)

export default Quote
