import React, { useState } from "react"
import { Box, AspectImage, Text, Link } from "theme-ui"

const WorkCard = ({ title, href, leadIn, image }) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      sx={{
        textDecoration:"none !important"
      }}
    >
      <AspectImage
        ratio={32 / 20}
        src={image}
        sx={{
          minHeight:"0px"
        }}
      />
      <Text
        sx={{
          fontSize: [2,3],
          fontWeight: "heading",
          minHeight: 0,
          height: "75px",
          overflow: "hidden",
          paddingX: 1,
          textOverflow: "ellipsis",
          "-webkit-line-clamp": "2",
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          maxHeight:"2.8em",
          
        }}
        mt="2"
      >
        {isShown ? leadIn : title}
      </Text>
    </Link>
  )
}

export default WorkCard
