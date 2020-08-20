import React, { ReactNode, ReactComponentElement, ReactElement } from "react"

export const createNestedLinks = (children, depth = 0) =>
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

export const flattenLinks = children =>
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
