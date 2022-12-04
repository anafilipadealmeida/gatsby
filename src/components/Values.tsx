import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { device } from "../styles/device"

const Container = styled.section`
  display: block;
  height: 100%;
  position: relative;
`

const Title = styled.h2`
  text-align: center;
`

const ColumnTitle = styled.p`
  text-align: center;
  text-transform: uppercase;
  padding: 20px;
  margin: 0;
  background: ${props => props.theme.backgroundColor};

  @media ${device.extraSmall} {
    padding: 10px;
  }
`

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;

  @media ${device.extraSmall} {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`

const ContentContainer = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 6.25rem 25px;
  width: calc(100% - 50px);
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.backgroundColor};
  opacity: 0.65;
  z-index: -1;
`

const Values = () => (
  <Container id="values">
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
    <ContentContainer>
      <Title>Things I value</Title>
      <Grid>
        <ColumnTitle>Be bold</ColumnTitle>
        <ColumnTitle>Default to action</ColumnTitle>
        <ColumnTitle>Pursue the truth</ColumnTitle>
        <ColumnTitle>Keep improving</ColumnTitle>
        <ColumnTitle>Be transparent</ColumnTitle>
        <ColumnTitle>Empathise with users</ColumnTitle>
        <ColumnTitle>Empower others</ColumnTitle>
        <ColumnTitle>Be kind & humble</ColumnTitle>
      </Grid>
    </ContentContainer>
  </Container>
)

export default Values
