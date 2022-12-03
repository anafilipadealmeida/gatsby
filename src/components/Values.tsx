import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.section`
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
`

const Title = styled.h2`
  text-align: center;
`

const Card = styled.div`
  width: calc(100% / 4 - 52px);
  display: inline-block;
  vertical-align: middle;
  margin: 25px;
`

const ColumnTitle = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  padding: 20px;
  margin: 0;
  background: ${props => props.theme.backgroundColor};
`

const Row = styled.div`
  margin: 0 auto;
  width: 100%;
`

const ContentContainer = styled.div`
  padding: 100px 140px;
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
      <Row>
        <Card>
          <ColumnTitle>Be bold</ColumnTitle>
        </Card>
        <Card>
          <ColumnTitle>Default to action</ColumnTitle>
        </Card>
        <Card>
          <ColumnTitle>Pursue the truth</ColumnTitle>
        </Card>
        <Card>
          <ColumnTitle>Keep improving</ColumnTitle>
        </Card>
      </Row>
      <Row>
        <Card>
          <ColumnTitle>Be transparent</ColumnTitle>
        </Card>
        <Card>
          <ColumnTitle>Empathise with users</ColumnTitle>
        </Card>
        <Card>
          <ColumnTitle>Empower others</ColumnTitle>
        </Card>
        <Card>
          <ColumnTitle>Be kind & humble</ColumnTitle>
        </Card>
      </Row>
    </ContentContainer>
  </Container>
)

export default Values
