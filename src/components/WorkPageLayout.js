import React from 'react';
import Layout from "./layout"
import {jsx, ThemeProvider} from "theme-ui"
import {Box, Image, Flex, Grid, Heading, Text, Styled,Link} from "theme-ui"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Head from "./Head"
import theme from "../gatsby-plugin-theme-ui/index"
import {MDXProvider} from '@mdx-js/react'
import FullImage from "./mdx-custom/FullImageGrid"
import WorkInfoGrid from "./WorkInfoGrid"
import Images from "./mdx-custom/Images"
const components = {
    wrapper: Box,
    a:props=>(<Link href={props.href} sx={{transition:"all 0.08s linear"}}>{props.children}</Link>),
    p:props=>(<Text mb={3} paddingX={[3,4]} sx={{fontSize:2}}>{props.children}</Text>),
    FullImage,
    Box,
    Images,
    img:Image
    
}
const WorkPageLayout = (props) => {

    const fm = props.pageContext.frontmatter
    return (
        <Layout>
          <Head title={`${fm.title} | Collective Fullstack - Web Developers`}></Head>
                <Box bg='secondary' color="background"  p={[3,4]} mb={3}>
                    <Heading sx={{fontSize:[6,7]}} width="100%">{fm.title}</Heading>
                    <Text sx={{fontSize:3}}>{fm.leadIn}</Text>
                </Box>
                <Images><Image src={fm.mainImage}/></Images>
                
            
                <Box sx={{mb:3}}>
                    <MDXProvider components={components}>{props.children}</MDXProvider>
                </Box>
                <Box p={[3,4]}>
                    <WorkInfoGrid year={fm.year} skills={fm.skills} links={fm.links}></WorkInfoGrid>
                </Box>

</Layout>
    );
}

export default WorkPageLayout;
