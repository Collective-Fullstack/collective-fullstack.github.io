import React from 'react';
import { Box } from '@chakra-ui/react';

import { getAllPosts } from '../lib/api';
import Link from '../components/Link';

function HomePage({ allPosts }) {
  return (
    <Box>
      {allPosts.map((i) => <Link href={`/work/${i.slug}`} isExternal={false}>{i.slug}</Link>)}
    </Box>
  );
}

export async function getStaticProps() {
  // uses the funky function to get the slugs
  const allPosts = getAllPosts(['slug']);
  // return the filenames as a prop
  return {
    props: {
      allPosts,
    },
  };
}

export default HomePage;
