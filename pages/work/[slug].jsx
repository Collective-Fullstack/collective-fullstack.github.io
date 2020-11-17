import React from 'react';

import { getAllPosts, getPostBySlug } from '../../lib/api';

function workPage({ post }) {
  return (
    <div>
      {JSON.stringify(post)}

    </div>
  );
}

export async function getStaticPaths() {
  // onceagain, get the slugs
  const allPosts = getAllPosts(['slug']);

  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'slug',
    'content',
    //
    'title',
    'mainImage',
    'leadIn',
    'date',
    'skills',
    'links',
  ]);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export default workPage;
