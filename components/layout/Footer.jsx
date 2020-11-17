import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  List,
  Link,
  ListItem,
} from '@chakra-ui/react';

import { navLinks, personLinks } from '../../lib/links';

const LinkList = ({ linkArr }) => {
  const MappedLinks = linkArr.map((i) => (
    <ListItem>
      <Link
        href={i[1]}
        isExternal={i[2]}
        textDecoration="underline"
        _hover={{
          textDecoration: 'none',
        }}
      >
        {i[0]}
      </Link>
    </ListItem>
  ));

  return (
    <List>
      {MappedLinks}
    </List>
  );
};

export default function Footer() {
  return (
    <Box
      bg="brand.secondary"
      color="white"
      p={8}
    >
      <Heading as="h4" size="xl" fontWeight="700">Collective Fullstack</Heading>
      <SimpleGrid columns={[1, 2]} spacing={4} mt={4}>
        <SimpleGrid columns={[1, 2]} spacing={4} fontSize="lg">
          <Box>
            <LinkList linkArr={navLinks} />
          </Box>
          <Box>
            <LinkList linkArr={personLinks} />
          </Box>
        </SimpleGrid>
        <Box fontSize="md" textAlign="right">
          <Text>
            Copyright (c) 2020 Collective Fullstack
          </Text>
          <Text mt={4}>
            Collective Fullstack acknowledges the Traditional Custodians of the land
            and waters of Australia, and pay respect to all Elders - past,
            present and emerging. We acknowledge that sovereignty was never ceded.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
