import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

import { navLinks } from '../lib/links';
import Link from './Link';

const Navbar = () => {
  // link gen
  const links = navLinks.map((i) => (
    <Link href={i[1]} isExternal={i[2]}>{i[0]}</Link>
  ));
  return (
    <Flex p={[4, 8]}>
      <Box>

      </Box>
      <Box flexGrow="1" />
      <Flex>
        {links}
      </Flex>
    </Flex>
  );
};

export default Navbar;
