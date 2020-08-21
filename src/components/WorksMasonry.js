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
        allMdx(sort: {fields: frontmatter___year, order: DESC}) {
          edges {
            node {
              slug
              frontmatter {
                leadIn
                thumb
                title
                year
              }
            }
          }
          totalCount
        }
      }
  `)
  console.log(data)
  let d = data.allMdx.edges
  const generatedCards = d.map((n,index)=>{
    const node = n.node;
    const fm = node.frontmatter
    return (
      <Box>
        <WorkCard
          href={`/work/${node.slug}`}
          title={fm.title}
          leadIn={fm.leadIn}
          image={fm.thumb}
        ></WorkCard>
      </Box>
    )
  })

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


  return <Grid columns={[2]}>{generatedCards}</Grid>
}

export default WorksMasonry
