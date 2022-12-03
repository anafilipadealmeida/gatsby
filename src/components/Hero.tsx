import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const LeftSide = styled.div`
  width: 50%;
`

const RightSide = styled.div`
  width: 50%;
  position: relative;
  height: 100%;
`

const Title = styled.h1`
  text-transform: uppercase;
  color: ${props => props.theme.accentColor};
`

const Description = styled.h3`
  text-transform: lowercase;
  font-weight: 300;
  font-size: 1.5rem;
`

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  display: flex;
  align-items: center;
`

const HelloText = styled.p`
  text-transform: uppercase;
  font-size: 5.5rem;
`

const TextContainer = styled.div`
  padding: 6rem;
`

const Hero = () => (
  <Wrapper>
    <LeftSide id="Hero">
      <TextContainer>
        <HelloText>Hey, I am</HelloText>
        <Title>Ana Filipa de Almeida</Title>
        <Description>empowering engineering teams</Description>
      </TextContainer>
    </LeftSide>
    <RightSide>
      <StaticImage
        alt=""
        src="../images/ana_portrait.jpg"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "-1",
        }}
      />
    </RightSide>
  </Wrapper>
)

export default Hero
