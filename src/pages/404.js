import React from "react"

import Layout from "../components/layout"
import {Box, Text, Heading} from "theme-ui"
const NotFoundPage = () => (
  <Layout>
    <Box backgroundColor="primary" color="background" p={4}>
    <Heading sx={{fontSize:7}}>NOT FOUND</Heading>

    <Text sx={{fontSize:3}}>You just found a URL that doesn't exist.</Text>
    </Box>
   
  </Layout>
)

export default NotFoundPage
