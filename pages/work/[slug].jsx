import React from 'react';
import sanitizeHtml from 'sanitize-html';

import { getAllPosts, getPostBySlug } from '../../lib/api';
import micromarkupParse from '../../lib/mm';

function workPage({ post }) {
  return (
    <div>
      {JSON.stringify(post)}
      <br />
      { /* eslint-disable-next-line react/no-danger */ }
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
  // BEEP BEPP SANITISE YOUR HTML TEXT OTHERWISE XSSSSSSS!!!
  const content = sanitizeHtml(micromarkupParse(post.content));
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export default workPage;
