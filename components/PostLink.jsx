import React from 'react';
import {
  Box, AspectRatio, Heading, Text,
} from '@chakra-ui/react';
import Image from 'next/image';

import Link from './Link';

const PostLink = ({
  slug, title, leadIn, thumb,
}) => (
  <Link
    href={`/work/${slug}`}
    _hover={{
      '.chakra-aspect-ratio': {
        borderColor: 'brand.primary',
      },
      '#headline': {
        textDecoration: 'underline',
      },
    }}
  >
    <Box width="100%">
      <AspectRatio ratio={960 / 600} bgColor="brand.primary" borderWidth="2px" borderColor="gray.200">
        <Image
          src={thumb}
          layout="fill"
          alt={`${title} logo`}
        />
      </AspectRatio>
      <Box mt={2}>
        <Heading id="headline" fontSize={['2xl', '3xl']}>{title}</Heading>
        <Text fontSize={['lg', 'xl']} decoration="none" noOfLines={2}>{leadIn}</Text>
      </Box>
    </Box>
  </Link>
);

export default PostLink;
