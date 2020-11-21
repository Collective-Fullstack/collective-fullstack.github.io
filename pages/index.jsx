import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import { getAllPosts, getPostBySlug } from '../lib/api';
import { PostLink } from '../components';

function HomePage({ postData }) {
  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={4}>
      {postData.map((i) => (
        <PostLink
          slug={i.slug}
          title={i.title}
          leadIn={i.leadIn}
          thumb={i.thumb}
          key={i.slug}
        />
      ))}
    </SimpleGrid>
  );
}

export async function getStaticProps() {
  // uses the funky function to get the slugs
  const allPosts = getAllPosts(['slug']);
  // this is where they should be sorted by date.
  const postData = allPosts.map((i) => getPostBySlug(i.slug, [
    'slug',
    'title',
    'thumb',
    'leadIn',
  ]));
  // return the filenames as a prop
  return {
    props: {
      postData,
      heading: {
        headline: 'Collective Fullstack',
        byline: 'We are a small two person freelance company who specialize in web development. Previous work includes building everything from environmental monitoring systems to chat clients.',
      },
    },
  };
}

export default HomePage;
