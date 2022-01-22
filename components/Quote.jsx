import React from 'react';
import { Text, Box } from '@chakra-ui/react';

const Quote = ({ quoteText, quotee }) => (
  <Box as="figure">
    <Text
      _before={{
        content: '"“"',
        display: 'block',
        fontSize: '2em',
        color: 'brand.primary',
        fontWeight: 'bold',
        lineHeight: '1',
        marginRight: 2,
        width: '1rem',
      }}
      as="blockquote"
      display="flex"
    >
      {quoteText}
    </Text>
    <Text
      as="figcaption"
      fontStyle="italic"
      fontSize="sm"
      marginTop={1}
      _before={{
        content: '"—"',
        display: 'block',
        color: 'brand.primary',
        fontWeight: 'bold',
        marginRight: 2,
        width: '1rem',
      }}
      display="flex"
    >
      {quotee}
    </Text>
  </Box>
);

export default Quote;
