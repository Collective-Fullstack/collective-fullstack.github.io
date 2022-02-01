import React from 'react';
import NextImage from 'next/image';

const customLoader = ({ src }) => src;

const Image = (props) => (
  <NextImage
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    loader={customLoader}
  />
);

export default Image;
