import React from "react"
import{Flex, NavLink, Heading,Box, Text, Grid, Button, Link, Card} from "theme-ui"
import Layout from "../components/layout"
import BigBoxLink from "../components/BigBoxLink"
import { Helmet } from 'react-helmet'
import Head from "../components/Head"
const IndexPage = () => (
  <Layout>
    <Head></Head>
    <Box bg='secondary' color="background"  p={[3,4]} mb={3}>
      <Heading sx={{fontSize:7}}>Collective Fullstack</Heading>
      <Text sx={{fontSize:3}}>We are a small two person freelance company who specialize in web development. Previous work includes building everything from environmental monitoring systems to chat clients.</Text>
    </Box>
    <Grid
    gap={3}
    columns={[2, '1fr 1fr']} sx={{textAlign:"center"}} >
      {/* <Link href="https://github.com/ehne" sx={{py:3,
          fontSize:[3,4],
          fontWeight:"heading",}}>Darcy</Link>
      <Link href="https://github.com/midataur" sx={{py:3,
          fontSize:[3,4],
          fontWeight:"heading",}}>Max</Link>  */}  
      <BigBoxLink href="https://github.com/ehne" name="Darcy"></BigBoxLink>
      <BigBoxLink href="https://github.com/midataur" name="Max"></BigBoxLink>
    </Grid>


    
  </Layout>
)

export default IndexPage
