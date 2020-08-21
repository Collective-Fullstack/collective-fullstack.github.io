import React from "react"
import{Flex, NavLink, Heading,Box, Text, Grid, Button, Link, Card} from "theme-ui"
import Layout from "../components/layout"
import BigBoxLink from "../components/BigBoxLink"
import { Helmet } from 'react-helmet'
import Head from "../components/Head"
import WorksMasonry from "../components/WorksMasonry"
import {graphql} from "gatsby"
import WorkCard from "../components/WorkCard"
const IndexPage = () => (
  <Layout>
    <Head title="Collective Fullstack - Web Developers"></Head>
    <Box bg='secondary' color="background"  p={[3,4]} mb={3}>
      <Heading sx={{fontSize:[6,7]}}>Collective Fullstack</Heading>
      <Text sx={{fontSize:3}}>We are a small two person freelance company who specialize in web development. Previous work includes building everything from environmental monitoring systems to chat clients.</Text>
    </Box>
    <Grid
    gap={3}
    columns={[2, '1fr 1fr']} sx={{textAlign:"center"}} mb={3}>
      {/* <Link href="https://github.com/ehne" sx={{py:3,
          fontSize:[3,4],
          fontWeight:"heading",}}>Darcy</Link>
      <Link href="https://github.com/midataur" sx={{py:3,
          fontSize:[3,4],
          fontWeight:"heading",}}>Max</Link>  */}  
      <BigBoxLink href="https://github.com/ehne" name="Darcy"></BigBoxLink>
      <BigBoxLink href="https://github.com/midataur" name="Max"></BigBoxLink>
    </Grid>
    <Box mb={3}>
    <WorksMasonry></WorksMasonry>
    </Box>
    
    {/* <Grid gap={3}
    columns={[1,2,3]}>
        {
          data.allFile.nodes.map((post,i)=>
            <Box>{post.childMdx.slug}</Box>
          )
        }
    </Grid> */}

    
  </Layout>
)

export default IndexPage
