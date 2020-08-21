import React from "react"

import Layout from "../components/layout"
import {Box, Text, Heading, Link} from "theme-ui"
import Head from "../components/Head"

const CustomLink = (props) => (
  <Link sx={{color:"background", pr:3, ":hover":{color:"background",  textDecoration:"none"}}} {...props}></Link>
)

const NotFoundPage = () => (
  <Layout>
    <Head title="404 | Collective Fullstack - Web Developers"></Head>
    <Box backgroundColor="primary" color="background" p={4}>
    <Heading sx={{fontSize:[6,7]}}>NOT FOUND</Heading>

    <Text sx={{fontSize:3}}>Error 404. Looks like that page doesn't exist.</Text>

    <Text sx={{fontSize:3}}>
      <CustomLink href="javascript:history.back()">go back</CustomLink>
      <CustomLink href="/">go to collective-fullstack.github.io</CustomLink>
    </Text>
    </Box>
   
  </Layout>
)

export default NotFoundPage
