import React from 'react';
import {Grid, Box, Heading} from "theme-ui"
const Footer = () => {
    return (
        <Grid backgroundColor="text" color="background"
        gap={2}
        columns={[ 1, null, 4 ]}>
            <Box>
                <Heading>Collective Fullstack</Heading>
                
            </Box>
            <Box></Box>
            <Box></Box>
        </Grid>
    );
}

export default Footer;
