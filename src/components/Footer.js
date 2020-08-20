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
      <Grid gap={3} columns={[2, [3,"1fr 1fr 2fr"]]} mt={3}>
        <Links components={components}></Links>
        <Box  sx={{textAlign:["left","right"], fontSize: [1,2]}}>
            Copyright (c) 2020 Collective Fullstack
        </Box>
      </Grid>
    </Box>
  )
}

export default Footer
