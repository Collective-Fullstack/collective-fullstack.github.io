import React from "react"
import { Grid, Box, Heading, Link, Text, Flex } from "theme-ui"
import Links from "../_content/Links.mdx"
import { createNestedLinks, flattenLinks } from "./linkManip"
const components = {
  wrapper: ({ children, ...props }) => {
    // gets the "Nav" scope of the nested links
    const nested = createNestedLinks(children).map((child, i) => {
      return child
    })
    const flattened = flattenLinks(nested)
    console.log(flattened)

    return (
      <>
        {nested.map((section, i) => {
          console.log(section.props.children)
          return (
            <Box>
              {flattenLinks(section.props.children[1]).map((link, i) => (
                <Text
                  sx={{
                    fontSize: [2,3],
                  }}
                >
                  <Link
                    href={link.props.href}
                    sx={{
                      color: "background",
                      ":hover": {
                        color: "highlight",
                      },
                    }}
                  >
                    {link.props.children}
                  </Link>
                </Text>
              ))}
            </Box>
          )
        })}
      </>
    )
  },
}
const Footer = () => {
  return (
    <Box backgroundColor="text" color="background" px={[3, 4]} py={4} >
        <Heading sx={{fontSize:5}}>Collective Fullstack</Heading>
      <Grid gap={[2,3]} columns={[1,2]} mt={3}>
        <Grid gap={[2,3]} columns={[1,1,2]}>
        <Links components={components}></Links>

        </Grid>
        <Box sx={{textAlign:["left","right"], fontSize: [1,2]}}>
            <Text>Copyright (c) 2020 Collective Fullstack</Text>
            <Text mt={2}>Collective Fullstack acknowledges the Traditional Custodians of the land and waters of Australia, and pay respect to all Elders - past, present and emerging. We acknowledge that sovereignty was never ceded.</Text>
        </Box>
      </Grid>
    </Box>
  )
}

export default Footer
