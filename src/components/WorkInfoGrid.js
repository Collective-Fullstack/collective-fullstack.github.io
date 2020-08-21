import React from 'react';

import {Grid, Box, Text, Link} from "theme-ui"
const WorkInfoGrid = ({year,skills,links}) => {
    return (
        <Grid columns={[1,2]} sx={{fontSize:1}}>
            <Box>
                <Box mb={3}>
                    <Text sx={{fontWeight:"display"}}>Year:</Text>
                    <Text>{year}</Text>
                </Box>
                <Box mb={3}>
                    <Text sx={{fontWeight:"display"}}>Skills:</Text>
                    <Text>{skills}</Text>
                </Box>
            </Box>
            <Box>
                <Box mb={3}>
                    <Text sx={{fontWeight:"display"}}>Links:</Text>
                    {
                        links.map((link,index)=>
                        <Text><Link href={link.href}>{link.text}</Link></Text>
                        )
                    }
                    
                </Box>
            </Box>
        </Grid>
    );
}

export default WorkInfoGrid;
