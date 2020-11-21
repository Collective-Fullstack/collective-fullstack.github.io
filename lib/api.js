import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// sets the directory to use
const postsDirectory = join(process.cwd(), 'work');

// returns all the slugs for the files.
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

// returns fields of a post by its slug.
export function getPostBySlug(slug, fields = []) {
  // removes the .md from the file name
  const realSlug = slug.replace(/\.md$/, '');
  // gets the path of the post
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  // gets the contents of the file
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // uses gray-matter to interpret the frontmatter
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}
// returns all posts sorted by date
export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
  return posts;
}
