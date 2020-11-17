import React from 'react';

import fs from 'fs';
import path from 'path';

function HomePage({ filenames }) {
  return (
    <div>
      Welcome to Next.js!
      {filenames}
    </div>
  );
}

export async function getStaticProps() {
  // fetches the posts in the directory "work"
  const postsDirectory = path.join(process.cwd(), 'work');
  // because this stuff is done in the build step, we can use just normal node stuff.
  const filenames = fs.readdirSync(postsDirectory);

  // return the filenames as a prop
  return {
    props: {
      filenames,
    },
  };
}

export default HomePage;
