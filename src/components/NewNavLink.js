import React from 'react';
import {NavLink} from "theme-ui"

const NewNavLink = ({ href, children, sx }) => {
    return (
      <NavLink href={href} pr={3} sx={{ fontSize: 3, ...sx }}>
        {children}
      </NavLink>
    )
  }
export default NewNavLink;
