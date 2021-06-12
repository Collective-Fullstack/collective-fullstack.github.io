import React from 'react';
import { Img } from '@chakra-ui/react';

const FastImage = ({ fullSrc, fastSrc }) => {
  return (
    <Img src={fastSrc}/>
  );
};

export default FastImage;
