import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  List,
  ListItem,
} from '@chakra-ui/react';
import Link from '../Link';
import { navLinks, personLinks } from '../../lib/links';

const LinkList = ({ linkArr }) => {
  const MappedLinks = linkArr.map((i) => (
    <ListItem>
      <Link href={i[1]} isExternal={i[2]}>{i[0]}</Link>
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
      py={10}
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
        <Box fontSize="md" textAlign={['left', 'right']}>
          <Text>
            Copyright (c) 2020 Collective Fullstack
          </Text>
          <Text mt={3}>
            Collective Fullstack acknowledges the Traditional Custodians of the land
            and waters of Australia, and pay respect to all Elders - past,
            present and emerging. We acknowledge that sovereignty was never ceded.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
