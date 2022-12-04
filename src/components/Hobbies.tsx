import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { device } from "../styles/device"

const Container = styled.section`
  display: flex;
  height: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 3.75rem 0;
  align-items: center;
`

const LeftSide = styled.div`
  width: 40%;
  padding: 6.25rem 20px 0;

  @media ${device.extraSmall} {
    width: 60%;
    text-align: center;
    margin: 0 auto;
    padding: 0;
  }

  @media ${device.small} {
    width: 60%;
    text-align: center;
    margin: 0 auto;
    padding: 0;
  }

  @media ${device.medium} {
    width: 60%;
    text-align: center;
    margin: 0 auto;
    padding: 0;
  }
`

const RightSide = styled.div`
  width: 60%;

  @media ${device.extraSmall} {
    display: none;
  }

  @media ${device.small} {
    display: none;
  }

  @media ${device.medium} {
    display: none;
  }
`

const Row = styled.div`
  text-align: right;
`

const ImageWrapper = styled.div`
  max-width: 200px;
  padding: 14px;
  display: inline-block;
`

const Hobbies = () => (
  <Container id="hobbies">
    <LeftSide>
      <h2>
        Out of the office you'll find me doing pilates, reading, traveling,
        baking, taking photos or petting my cat Wiki.
      </h2>
    </LeftSide>
    <RightSide>
      <Row>
        <ImageWrapper>
          <StaticImage alt="" src="../images/pilates.png" />
        </ImageWrapper>
        <ImageWrapper>
          <StaticImage alt="" src="../images/read.png" />
        </ImageWrapper>
        <ImageWrapper>
          <StaticImage alt="" src="../images/travel.png" />
        </ImageWrapper>
      </Row>
      <Row>
        <ImageWrapper>
          <StaticImage alt="" src="../images/bake.png" />
        </ImageWrapper>
        <ImageWrapper>
          <StaticImage alt="" src="../images/photo.png" />
        </ImageWrapper>
        <ImageWrapper>
          <StaticImage alt="" src="../images/cat.png" />
        </ImageWrapper>
      </Row>
    </RightSide>
  </Container>
)

export default Hobbies
