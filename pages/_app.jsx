/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

const AppContainer = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);
// Component is the entire pages component
export default AppContainer;
