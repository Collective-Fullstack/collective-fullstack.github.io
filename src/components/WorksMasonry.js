import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Grid } from "theme-ui"
import WorkCard from "./WorkCard"
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

const WorksMasonry = () => {
  const data = useStaticQuery(graphql`
    query worksQuery {
      allFile(filter: { name: {}, sourceInstanceName: { eq: "work-posts" } }) {
        nodes {
          childMdx {
            slug
            frontmatter {
              title
              thumb
              leadIn
            }
          }
        }
        totalCount
      }
    }
  `)
  console.log(data)
  let d = data.allFile.nodes
  const chunkedData = chunk(d, 3)
  const generatedWalls = chunkedData.map((i, index) => {
    const generatedCards = i.map((j, jindex) => {
      /* const gridArea =  ["main", "sidetop", "sidebottom"][jindex]
      const align =  ["stretch","start","end"][jindex]  */
      const mdxInfo = j.childMdx
      return (
        <Box sx={{ }}>
          <WorkCard
            href={`/work/${mdxInfo.slug}`}
            title={mdxInfo.frontmatter.title}
            leadIn={mdxInfo.frontmatter.leadIn}
            image={mdxInfo.frontmatter.thumb}
          ></WorkCard>
        </Box>
      )
    })
  return(
  <Grid columns={[2]}>{generatedCards}</Grid> 
  )
    /* <Box
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr 1fr","1fr 1fr","2.7fr 1fr"],
          gridTemplateRows: ["1fr 0.5fr","1fr 1fr"],
          gridTemplateAreas: ["'main main' 'sidetop sidebottom'","'main sidetop' 'sidebottom .'","'main sidetop' 'main sidebottom'"],
          gap: 3,

          mb: 3,
        }}
      >
        {generatedCards}
      </Box> */
  })

  return <>{generatedWalls}</>
}

export default WorksMasonry
