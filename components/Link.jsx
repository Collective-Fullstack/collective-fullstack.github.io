/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextLink from 'next/link';

import { Link as ChakraLink } from '@chakra-ui/react';

const Link = ({
  href, isExternal = false, children, ...rest
}) => (
  <NextLink href={href} passHref>
    <ChakraLink
      href={href}
      isExternal={isExternal}
      textDecoration="none"
      _hover={{
        textDecoration: 'none',
      }}
      {...rest}
    >
      {children}
    </ChakraLink>
  </NextLink>
);

export default Link;
