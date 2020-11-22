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
    <ListItem key={`${i[1]}-footer`}>
      <Link href={i[1]} isExternal={i[2]} textDecoration="underline" _hover={{ opacity: 0.7 }}>{i[0]}</Link>
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
      px={8}
      pt={10}
    >
      <Heading as="h4" size="xl" fontWeight="700">Collective Fullstack</Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={4} mt={4}>
        <SimpleGrid columns={[1, 2]} spacing={4} fontSize="lg" mb={4}>
          <Box>
            <LinkList linkArr={navLinks} />
          </Box>
          <Box>
            <LinkList linkArr={personLinks} />
          </Box>
        </SimpleGrid>
        <Box fontSize="md" textAlign={['left', null, 'right']}>
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
