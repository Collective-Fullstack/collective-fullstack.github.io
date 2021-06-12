import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Box, Stack, Img, Text,
} from '@chakra-ui/react';

import { getAllPosts, getPostBySlug } from '../../lib/api';
import { Link } from '../../components';

function workPage({ post }) {
  const Images = post.images ? post.images.map((i) => (
    <Box borderWidth="2px" borderColor="gray.200" key={`sImage-${i.src}`}>
      <Img src={i.src} alt={i.alt} width="100%" />
    </Box>
  )) : '';

  return (
    <Box fontSize={['md', 'lg']}>
      <Stack spacing={4} width={['100%', '100%', '70%']} mx="auto">
        <Img src={post.mainImage} />
        <ReactMarkdown>{post.content}</ReactMarkdown>
        {Images}
        <Box>
          <Text>
            <b>Date:</b>
            {' '}
            {post.date}
          </Text>
          <Text>
            <b>Skills: </b>
            {post.skills}
          </Text>
          <Text>
            <b>Links: </b>
            {post.links.map((i) => (
              <Link href={i.href} textDecoration="underline" mr={2} key={i.href} isExternal>{i.text}</Link>
            ))}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

export async function getStaticPaths() {
  // onceagain, get the slugs
  const allPosts = await getAllPosts(['slug']);

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
    'images',
    'mainImage',
    'leadIn',
    'date',
    'skills',
    'links',
  ]);
  return {
    props: {
      heading: {
        headline: post.title,
        byline: post.leadIn,
      },
      post: {
        ...post,
      },
      isHomepage: false,
    },
  };
}

export default workPage;
