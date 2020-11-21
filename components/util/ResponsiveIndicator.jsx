import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

const ResponsiveIndicator = () => (
  <Flex
    position="fixed"
    top={4}
    right={4}
    bgColor={{
      base: 'gray.500',
      sm: 'pink.500',
      md: 'orange.500',
      lg: 'green.500',
      xl: 'blue.500',
    }}
    // sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500
    width={6}
    height={6}
    borderRadius="50%"
    justifyContent="center"
    alignItems="center"
    fontSize="xs"
  >
    {
      ['al', 'sm', 'md', 'lg', 'xl'].map((i, index) => {
        const displayArray = Array(5).fill('none');
        displayArray[index] = 'block';
        return (
          <Text d={displayArray}>
            {i}
          </Text>
        );
      })
    }
  </Flex>
);

export default ResponsiveIndicator;
