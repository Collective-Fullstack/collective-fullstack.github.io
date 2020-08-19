import React from 'react';
import {Link} from "theme-ui"
const BigBoxLink = (props) => {
    return (
        <Link href={props.href}
        sx={{
          backgroundColor:"primary",
          color:"background",
          py:2,
          fontSize:[3,4],
          fontWeight:"heading",
          ":hover":{
            color:"background",
            backgroundColor:"secondary"
          }
        }}
    >{props.name}</Link>
    );
}

export default BigBoxLink;
