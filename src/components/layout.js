/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import{Flex, Grid, Box, ThemeProvider} from "theme-ui"
import NavBar from "./NavBar"
import Footer from "./Footer"
import theme from "../gatsby-plugin-theme-ui/index"
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

  return (

      <>
        <Box sx={{
          minHeight:"100vh"
        }}>
        <NavBar></NavBar>
        <Grid
          gap={2}
          columns={[[1, '1fr'],[2, '3fr 1fr'],[2, '1fr 1fr']]}>
          <Box>{children}</Box>
        </Grid> 
        </Box>
        
        <Footer></Footer>

      </>
        
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
