import * as React from "react"
import styled from "styled-components"
import { device } from "../styles/device"

const Section = styled.section`
  height: 100%;
  padding: 5rem 0;
  background: ${props => props.theme.sectionBackgroundColor};
`

const Container = styled.section`
  max-width: 1400px;
  margin: auto;
`

const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.sectionTitleColor};
`

const Card = styled.div`
  border: 1px solid ${props => props.theme.primaryColor};
  margin: 25px;
  padding: 20px;
  background: ${props => props.theme.cardBackgroundColor};
`

const Column = styled.div`
  width: 40%;
  display: inline-block;
  vertical-align: middle;

  @media ${device.extraSmall} {
    width: 100%;
  }
`

const RightColumn = styled(Column)`
  width: 60%;

  @media ${device.extraSmall} {
    width: 100%;
  }
`

const DateLabel = styled.p`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
`

const CompanyLabel = styled.p`
  text-transform: uppercase;
  margin: 20px 0;
`

const RoleLabel = styled.p`
  text-transform: uppercase;
  font-size: 1.375rem;
  color: ${props => props.theme.accentColor};
  font-weight: 600;
  margin: 0;
`

const Work = () => (
  <Section id="work">
    <Container>
      <Title>My last jobs</Title>
      <Card>
        <Column>
          <DateLabel>Current</DateLabel>
          <CompanyLabel>Ambassador Labs</CompanyLabel>
          <RoleLabel>Senior Engineering Manager</RoleLabel>
        </Column>
        <RightColumn>
          <p>
            Managing the two teams responsible for the Telepresence and
            Ambassador Cloud products.
          </p>
        </RightColumn>
      </Card>
      <Card>
        <Column>
          <DateLabel>2021</DateLabel>
          <CompanyLabel>Buffer</CompanyLabel>
          <RoleLabel>Engineering Manager</RoleLabel>
        </Column>
        <RightColumn>
          <p>
            Managing the Webapp team, responsible for the tools that generate
            most of the $20M revenue.
          </p>
        </RightColumn>
      </Card>
      <Card>
        <Column>
          <DateLabel>2018-2021</DateLabel>
          <CompanyLabel>Buffer</CompanyLabel>
          <RoleLabel>Senior Front-End Engineer</RoleLabel>
        </Column>
        <RightColumn>
          <p>
            Leading the FE tech discussions and ship great features in the
            Publishing product.
          </p>
        </RightColumn>
      </Card>
    </Container>
  </Section>
)

export default Work
