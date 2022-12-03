import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 60px 0;
  box-sizing: border-box;
  height: 100%;
  align-items: center;
`

const LeftSide = styled.div`
  width: 40%;
  padding: 100px 20px 0;
`

const RightSide = styled.div`
  width: 60%;
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
          <StaticImage alt="pilates" src="../images/pilates.png" />
        </ImageWrapper>
        <ImageWrapper>
          <StaticImage alt="reading" src="../images/read.png" />
        </ImageWrapper>
        <ImageWrapper>
          <StaticImage alt="traveling" src="../images/travel.png" />
        </ImageWrapper>
      </Row>
      <Row>
        <ImageWrapper>
          <StaticImage alt="blueberry tart" src="../images/bake.png" />
        </ImageWrapper>
        <ImageWrapper>
          <StaticImage alt="flamingo" src="../images/photo.png" />
        </ImageWrapper>
        <ImageWrapper>
          <StaticImage alt="cat" src="../images/cat.png" />
        </ImageWrapper>
      </Row>
    </RightSide>
  </Container>
)

export default Hobbies
