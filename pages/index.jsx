import React from 'react';

import { getAllPosts } from '../lib/api';

function HomePage({ allPosts }) {
  return (
    <div>
      Welcome to Next.js!
      {allPosts.map((i) => (<a href={`/work/${i.slug}`}>{i.slug}</a>))}
    </div>
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
