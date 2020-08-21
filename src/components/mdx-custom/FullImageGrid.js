import React from 'react';
import {Image, Grid, Box, AspectImage, AspectRatio,Flex} from "theme-ui"
import { MDXProvider } from '@mdx-js/react';

const components = {
    // figure out how to remove the p element.!
    p: props=> (<Box>{props.children}</Box>),
    img: props => (
    <AspectRatio ratio={32/20}>
        <Image
            src={props.src}
            sx={{
            objectFit: 'cover',
            
            }}
            className="lightense"
        />
        </AspectRatio>

    )
}

const FullImage = ({children,caption, gridCols=[1]}) => {
    // basically, get the children of the element, and style them
    console.log(children)
    return (
        <Box mb={3}>
            <Grid columns={[...gridCols]} gap={[2,3]}>
            <MDXProvider components={components}>{children}</MDXProvider>
        </Grid>
        </Box>
        
        
       
    );
}

export default FullImage;
