import React from "react"
import { NavLink, Flex, Heading, Link } from "theme-ui"
import Links from "../_content/Links.mdx"
import {createNestedLinks, flattenLinks} from "./linkManip"
import NewNavLink from "./NewNavLink"

const components = {
  wrapper: ({ children, ...props }) => {
    // gets the "Nav" scope of the nested links 
    const nested = createNestedLinks(children).map((child, i)=>{
        //console.log(child.props.children[0])
        if (child.props.children[0]==="Nav"){
            return child
        }
    })
    const flattened = flattenLinks(nested)
    //console.log(flattened)
    return (
      <>
        {flattened.map((link, i) => (
          <NewNavLink href={link.props.href}>{link.props.children}</NewNavLink>
        ))}
      </>
    )
  },
}
const NavBar = () => {
  return (
    <Flex as="nav" px={[3, 4]} py={4} sx={{flexWrap:"wrap"}}>
      <Links components={components}></Links>
    </Flex>
  )
}

export default NavBar
