import React from 'react';
import {Image, Grid, Box, AspectImage, AspectRatio,Flex} from "theme-ui"
import { MDXProvider } from '@mdx-js/react';

const components = {
    // figure out how to remove the p element.!
    p: props=> (<Box>{props.children}</Box>),
    img: props => (
    <Box sx={{px:[3,4], mb:3}}>
        <Image
            src={props.src}
            className="lightense"
        />
        </Box>

    )
}

const FullImage = ({children,caption, gridCols=[1]}) => {
    // basically, get the children of the element, and style them
    console.log(children)
    return (
        <Box mb={3}>
            <MDXProvider components={components}>{children}</MDXProvider>
        </Box>
        
        
       
    );
}

export default FullImage;
