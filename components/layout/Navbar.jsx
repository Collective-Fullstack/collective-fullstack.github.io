import React from 'react';
import {
  Flex, Box, Img, useDisclosure, Drawer,
  DrawerBody, DrawerCloseButton, DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';

import { navLinks } from '../../lib/links';
import Link from '../Link';

const NavContainer = ({ children, display, ...rest }) => (
  <Box
    p={[4, 8]}
    position="absolute"
    top={0}
    left={0}
    right={0}
    display={display}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    {children}
  </Box>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NavContainer display={{
        base: 'none',
        md: 'flex',
      }}
      >
        <Box>
          <Link
            href="/"
            isExternal={false}
          >
            <Img src="/logoWords.svg" width="14em" />
          </Link>
        </Box>
        <Box flexGrow="1" />
        <Flex flexWrap="wrap">
          {navLinks.map((i) => (
            <Box key={`${i[1]}-navbar-md`}>
              <Link
                href={i[1]}
                isExternal={i[2]}
                fontWeight="bold"
                mr={2}
                p={2}
                _hover={{ opacity: 0.7 }}
              >
                {i[0]}
              </Link>
            </Box>
          ))}
        </Flex>
      </NavContainer>
      <NavContainer
        display={{
          base: 'block',
          md: 'none',
        }}
        alignItems="center"
      >
        <Box>
          <Link
            href="/"
            isExternal={false}
          >
            <Img src="/logoWords.svg" width="14em" />
          </Link>
        </Box>
        <Box
          position="absolute"
          top={0}
          right={0}
        >
          <Box
            as="button"
            p={4}
            bg="brand.primary"
            borderRadius="none"
            aria-label="open menu"
            onClick={onOpen}
          >
            <MdMenu />
          </Box>
        </Box>
      </NavContainer>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="background" borderRadius="none" />
          <DrawerBody color="background">
            {navLinks.map((i) => (
              <Box key={`${i[1]}-navbar-base`}>
                <Link
                  href={i[1]}
                  isExternal={i[2]}
                  fontWeight="bold"
                  mr={2}
                  _hover={{ opacity: 0.6 }}
                  paddingY={2}
                  display="block"
                >
                  {i[0]}
                </Link>
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
