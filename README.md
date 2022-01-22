![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Collective-Fullstack/collective-fullstack.github.io/Next.js%20build%20and%20export?style=for-the-badge)

###### Where important things are:
- All pages of previous work are stored as `.md` files in the `/work` directory.
- Images for each work page should be stored in `/public/s-images/work/<name>`.
- Theme data is stored in `/lib/theme.js`.
- Links for the nav bar and the footer are stored in `/lib/links.js`.
- The main layout for all the pages is stored in `/pages/_app.jsx`.

###### Frontmatter:
- `title`: The title of the project, is used for the links on index, the above card text and the `<title>` tag.
- `leadIn`: The byline text that goes underneath the title on index and work pages.
- `thumb`: A URL to the thumbnail image for the index page. Should be 8:5 ratio. 
- `mainImage`: A URL to the main image, which will be used on the work page. Being put before the main content of the page.
- `images`: An array of images that goes below the content of the page.
  - `src`: URL to an image.
  - `alt`: Alt text for the image.
- `links`: An array of links that goes underneath the images on the work page.
  - `text`: What the URL text should be.
  - `href`: Where the URL should go.
- `date`: The month when the project was done. Should be stored as a string in the format: `YYYY.MM`.
- `skills`: Just kinda, what skills were used in the project.
- `quote`: If there is a quote from the client, this is where it goes
  - `text`: the actual quote text
  - `quotee`: the person being quoted

###### Directory structure:
- public: gets passed through to the root dir of the build version.
- work: all the work pages as markdown.
- pages: the pages that get rendered. Uses next's routing stuff.
- lib: JS files that help components and pages render/function.
- components: reusable bits of code.
  - layout: stores components related to the layout of a page. ATM it's the footer and the navbar.
  - util: developer utility components. ie. breakpoint indicator.
