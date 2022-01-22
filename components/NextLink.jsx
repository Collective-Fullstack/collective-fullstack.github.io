import React from 'react';
import {
  AspectRatio,
  Flex, Image, Text, VStack,
} from '@chakra-ui/react';
import Link from './Link';

const Nextlink = ({
  img, href, text, title,
}) => (
  <Link href={href} isExternal={false}>
    <Flex role="group">
      <AspectRatio
        ratio={960 / 600}
        w={['150%', '250px', '250px']}
        flexGrow="1"
        border="2px solid"
        borderColor="gray.200"
        _groupHover={{ borderColor: 'brand.primary' }}
      >
        <Image src={img} height="3em" />
      </AspectRatio>
      <VStack justify="center" align="stretch" flexShrink="1" p={[2, 3, 4]}>
        <Text fontWeight="bold" textDecoration="none">
          Next:
          {` ${title} `}
          <Text as="span" display="inline-block" transition="ease-in-out 0.2s all" _groupHover={{ transform: 'translateX(0.3em)' }}>→</Text>
        </Text>
        <Text noOfLines={2}>{text}</Text>
      </VStack>
    </Flex>
  </Link>
);

export default Nextlink;
