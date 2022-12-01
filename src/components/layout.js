/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "@fontsource/montserrat"
import "@fontsource/lora"
import { GlobalStyle } from "../styles/theme"
import styled, { ThemeContext } from "styled-components"

import Footer from "./Footer"
import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const theme = useContext(ThemeContext)

  return (
    <>
      <GlobalStyle theme={theme} />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
