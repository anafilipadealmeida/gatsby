import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Quote from "../components/Quote"
import Story from "../components/Story"
import Statement from "../components/Statement"
import Work from "../components/Work"
import Values from "../components/Values"
import Hobbies from "../components/Hobbies"

const LayoutWrapper = styled.div`
  position: relative;
`

const Divider = styled.div`
  width: 80px;
  height: 4px;
  background: ${props => props.theme.accentColor};
  margin: 2rem auto;
  border-radius: 6px;
`

const IndexPage = () => (
  <Layout>
    <LayoutWrapper alignItems="center">
      <Hero title="Hero" />
      <Divider />
      <Quote title="Quote" />
      <Divider />
      <Story title="Story" />
      <Divider />
      <Statement />
      <Divider />
      <Work />
      <Divider />
      <Values title="Values" />
      <Divider />
      <Hobbies title="Hobbies" />
    </LayoutWrapper>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
