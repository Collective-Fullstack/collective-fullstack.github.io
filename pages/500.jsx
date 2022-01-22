/* eslint-disable no-script-url */
import React from 'react';
import { Box } from '@chakra-ui/react';

import { Link } from '../components';

const FiveHundred = () => (
  <>
    <Box>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link
        href="javascript:history.back()"
        isExternal={false}
        textDecoration="underline"
      >
        Go back
      </Link>
    </Box>
    <Box>
      <Link
        href="/"
        isExternal={false}
        textDecoration="underline"
      >
        Go to Collective-Fullstack.github.io
      </Link>
    </Box>
  </>
);

export async function getStaticProps() {
  return {
    props: {
      heading: {
        headline: '500',
        byline: 'Internal Server Error',
      },
      isHomepage: false,
    },
  };
}
export default FiveHundred;
