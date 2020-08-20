import React, { ReactNode, ReactComponentElement, ReactElement } from "react"
import { NavLink, Flex, Heading, Link } from "theme-ui"
import Links from "../_content/Links.mdx"
import { MDXProvider } from "@mdx-js/react"
const NewNavLink = ({ href, children, sx }) => {
  return (
    <NavLink href={href} pr={3} sx={{ fontSize: 3, ...sx }}>
      {children}
    </NavLink>
  )
}
const createNestedLinks = (children, depth = 0) =>
  React.Children.toArray(children).reduce((acc = [], child) => {
    console.log(acc)
    // check if it's still an element
    if (!React.isValidElement(child)) {
      return acc
    }
    // define what type
    const elemType = child.props && child.props.mdxType
    //console.log(elemType)
    // check if there isnt any props or any children
    if (!child.props || !child.props.children) return acc

    // check if we've reached the link element or the "scope" element (li)
    if (elemType === "a" || elemType === "li") return [...acc, child]

    if (depth > 0 && elemType === "ul") {
      const last = acc[acc.length - 1]
      acc[acc.length - 1] = React.cloneElement(last, {
        links: createNestedLinks(child.props.children),
      })
      return acc
    }
    // return loop tiem
    return [...acc, ...createNestedLinks(child.props.children, depth + 1)]
  }, [])

const flattenLinks = children =>
  React.Children.toArray(children).reduce((acc, child) => {
    // check if its an element or not
    if (React.isValidElement(child)) {
      // check if its the a element
      if (child.props && child.props.mdxType === "a") {
        return [...acc, child]
      }
      // check if it has no children or props
      if (!child.props || !child.props.children) return acc
      // do a big loop
      return React.Children.toArray([
        ...acc,
        ...flattenLinks(child.props.children),
      ])
    }
    return acc
  }, [])

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
    <Flex as="nav" px={[3, 4]} py={4}>
      <Links components={components}></Links>
    </Flex>
  )
}

export default NavBar
