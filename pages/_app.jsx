/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import {
  Box, ChakraProvider, Flex, Heading, Text,
} from '@chakra-ui/react';

import theme from '../lib/theme';
import { Footer, ResponsiveIndicator, Navbar } from '../components';

const AppContainer = ({ Component, pageProps }) => {
  // ideally this would use the useTheme hook.
  // But that can only be called successfully from inside chakraprovider.
  const [bgColor, primaryColor] = ['#06060e', '#FF4019'];

  const bgString = `linear-gradient(90deg, ${bgColor} 21px, transparent 1%) center, linear-gradient(${bgColor} 21px, transparent 1%) center, ${primaryColor}`;
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <ResponsiveIndicator />
      {/* Comment ^ out on production builds */}
      <Box
        minHeight="100vh"
        background={bgString}
        backgroundSize="22px 22px"
      >
        <Box p={[4, 8]}>
          <Flex minHeight="50vh" alignItems="flex-end" mb={[4, 8]}>
            <Box width={['100%', '90%', '80%', '60%']}>
              <Heading as="h1" size="3xl" mb={1}>{pageProps.heading.headline}</Heading>
              <Text fontSize={['lg', 'xl']}>
                {pageProps.heading.byline}
              </Text>
            </Box>
          </Flex>
          <Box backgroundColor="text" color="background" p={[4, 8]}>
            <Component {...pageProps} />
          </Box>
        </Box>
      </Box>
      <Footer />
      <Box bg="brand.secondary" color="rgba(255,255,255,0.5)" p="4" fontSize="sm">
        <Heading fontSize="md">Boring nerd stuff:</Heading>
        {JSON.stringify(pageProps)}
      </Box>
    </ChakraProvider>
  );
};

// Component is the entire page's component
export default AppContainer;
