import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Box, Stack, Text,
} from '@chakra-ui/react';
// import Image from 'next/image';

import { getAllPosts, getPostBySlug } from '../../lib/api';
import {
  Link, Quote, NextLink, Image,
} from '../../components';
import generatePlaice from '../../lib/generatePlaice';
// import blurhashToBase64 from '../../lib/blurhashToBase64';

function workPage({ post, next }) {
  const Images = post.images ? post.images.map((i) => (
    <Box key={`sImage-${i.src}`} as="figure">
      <Box sx={{ width: '100%', border: '2px solid', borderColor: 'gray.200' }}>
        <Image
          src={i.src}
          alt={i.alt}
          layout="responsive"
          width={i.plaice.width}
          height={i.plaice.height}
          placeholder="blur"
          blurDataURL={i.plaice.base64}
          unoptimized
        />
      </Box>
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
      <Image
        src={post.mainImage[0]}
        width={post.mainImage[1].width}
        height={post.mainImage[1].height}
        placeholder="blur"
        blurDataURL={post.mainImage[1].base64}
        backgroundSize="cover"
        layout="responsive"
        unoptimized
      />
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

  // generate placeholders and stuff so that it loads better
  if (post.images) {
    const promises = post.images.map(async (i, ix) => {
      const plaice = await generatePlaice(i.src);
      post.images[ix] = {
        src: i.src,
        alt: i.alt,
        plaice,
      };
    });
    await Promise.all(promises);
  }

  post.mainImage = [post.mainImage, await generatePlaice(post.mainImage)];

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
