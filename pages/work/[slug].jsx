import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Box, Stack, Img, Text,
} from '@chakra-ui/react';

import { getAllPosts, getPostBySlug } from '../../lib/api';
import { Link, Quote, NextLink } from '../../components';
// import blurhashToBase64 from '../../lib/blurhashToBase64';

function workPage({ post, next }) {
  const Images = post.images ? post.images.map((i) => (
    <Box key={`sImage-${i.src}`} as="figure">
      <Img src={i.src} alt={i.alt} width="100%" sx={{ border: '2px solid', borderColor: 'gray.200' }} />
      <Text
        as="figcaption"
        textAlign="center"
        color="gray.500"
        marginTop={1}
        fontSize="md"
        fontStyle="italic"
        _before={{
          content: '"↑"',
          fontStyle: 'normal',
          marginRight: 2,
        }}
      >
        {i.alt}
      </Text>
    </Box>
  )) : '';

  return (
    <Stack fontSize={['md', 'lg']} spacing={4} width={['100%', '100%', '70%']} mx="auto">
      <Img src={post.mainImage} backgroundSize="cover" height="100%" width="100%" />
      <ReactMarkdown
        // eslint-disable-next-line react/jsx-props-no-spreading
        components={{ a: ({ node, ...props }) => <Link {...props} isExternal textDecoration="underline" /> }}
      >
        {post.content}
      </ReactMarkdown>
      {post.quote ? <Quote quoteText={post.quote.text} quotee={post.quote.quotee} /> : null}
      {Images}
      <Box paddingBottom={3}>
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
      <NextLink href={`/work/${next.slug}`} img={next.thumb} text={next.leadIn} title={next.title} />
    </Stack>
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
    'quote',
  ]);

  /* post.mainImage = [post.mainImage, await blurhashToBase64(post.mainImage)];

  if (post.images) {
    post.images.forEach(async (i, ix) => {
      const blurhash = await blurhashToBase64(i.src);
      console.log(`done image ${i.src}`);
      post.images[ix] = { src: i.src, alt: i.alt, blurhash };
    });
  } */

  const allPosts = await getAllPosts(['slug', 'thumb', 'leadIn', 'title']);
  let currentIndex;
  allPosts.every((i, ix) => {
    if (i.slug === params.slug) {
      currentIndex = ix;
      return false;
    }
    return true;
  });

  const next = allPosts.length - 1 === currentIndex ? allPosts[0] : allPosts[currentIndex + 1];
  return {
    props: {
      heading: {
        headline: post.title,
        byline: post.leadIn,
      },
      post: {
        ...post,
      },
      next: {
        ...next,
      },
      isHomepage: false,
    },
  };
}

export default workPage;
