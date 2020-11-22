/* eslint-disable no-script-url */
import React from 'react';
import { Box } from '@chakra-ui/react';

import { Link } from '../components';

const FourOFour = () => (
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
        headline: '404',
        byline: 'That page could not be found.',
      },
      isHomepage: false,
    },
  };
}
export default FourOFour;
