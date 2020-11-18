/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';

import theme from '../lib/theme';
import Footer from '../components/layout/Footer';

const AppContainer = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <Box m={2} minH="95vh">
      <Component {...pageProps} />
    </Box>
    <Footer />
  </ChakraProvider>
);

// Component is the entire page's component
export default AppContainer;
