import { createCanvas, loadImage } from 'canvas';
import { decode, encode } from 'blurhash';
import path from 'path';

const getImageData = (image) => {
  const canvas = createCanvas();
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext('2d');
  context.drawImage(image, 0, 0);
  return context.getImageData(0, 0, image.width, image.height);
};

const generateBlurhash = async (image) => {
  const imageData = await getImageData(image);
  return encode(imageData.data, imageData.width, imageData.height, 4, 3);
};

const pixelsToBase64 = (pixels, width, height) => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  const imageData = ctx.createImageData(width, height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);
  return canvas;
};

const blurhashToBase64 = async (imageURL) => {
  const imageLoaded = await loadImage(path.join('public', imageURL));
  const BH = await generateBlurhash(imageLoaded);
  const [w, h] = [5, 3];

  const decodedBH = decode(BH, w * 2, h * 2);
  const canvasElem = pixelsToBase64(decodedBH, w * 2, h * 2);
  const base64 = await canvasElem.toDataURL();
  return base64;
};

export default blurhashToBase64;
