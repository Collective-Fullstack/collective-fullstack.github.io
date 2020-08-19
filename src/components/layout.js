/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import{Flex, NavLink, Grid, Box} from "theme-ui"

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
      <Flex as='nav' px={[3,4]} py={4}>
          <NavLink href='#!' pr={3} sx={{fontSize:3}} variant="nav">
            Home
          </NavLink>
          <NavLink href='https://github.com/collective-fullstack' pr={3} sx={{fontSize:3}}>
            Github
          </NavLink>
          <NavLink href='https://www.freelancer.com/u/ColFul' pr={3} sx={{fontSize:3}}>
            Freelancer.com
          </NavLink>
        </Flex>
        <Grid
          gap={2}
          columns={[[1, '1fr'],[2, '2fr 1fr'],[2, '1.5fr 1fr']]}>
          <Box>{children}</Box>
        </Grid>
      </>
        
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
