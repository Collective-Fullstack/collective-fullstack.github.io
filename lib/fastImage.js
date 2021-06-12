import { join } from 'path';
import sharp from 'sharp';
// sets the directory to use
const postsDirectory = join(process.cwd(), 'public');

export default async function getFastImage(src) {
  const image = await sharp(join(postsDirectory, src))
    .resize({ width: 5 })
    .toFormat('png')
    .toBuffer()
    .toString('base64');

  return image;
}
