import * as React from "react"
import { device } from "../styles/device"
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
  width: 50%;
  padding-top: 100px;
`

const RightSide = styled.div`
  width: 50%;
`

const Story = () => (
  <Container>
    <LeftSide>
      <h2>"why was I born if i can't do what I want?"</h2>
      <p>- Ana, 4 years old</p>
    </LeftSide>
    <RightSide>
      <StaticImage alt="child" src="../images/ana_child.jpg" />
    </RightSide>
  </Container>
)

export default Story
