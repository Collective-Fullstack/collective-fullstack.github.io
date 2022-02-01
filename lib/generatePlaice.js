import { getPlaiceholder } from 'plaiceholder';
import path from 'path';

const generatePlaice = async (imageSrc) => {
  const plaiceData = await getPlaiceholder(path.join('/', imageSrc));
  const plaice = {
    width: plaiceData.img.width,
    height: plaiceData.img.height,
    base64: plaiceData.base64,
  };
  return plaice;
};

export default generatePlaice;
