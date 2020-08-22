This is the code for our website.

## Where things are located:
* project pages are stored as mdx in `src/pages/work`
  * projects have to have some frontmatter set:
    * title : the text to show in the big box and the text underneath the thumbnail on the main page.
    * leadIn : the lead in info text to show in the big box, and in the hover state on the main page.
    * thumb : the src url of the thumbnail image (the image should be 32:20).
    * mainImage : the src url of the big image that takes up the full width on the work page.
    * links : an array of links to put in the infogrid at the bottom of the work page.
      * text : the text to display.
      * href : the url that it'll go to.
    * year : the year and month the project was done. **Needs to be a string with the format `"yyyy.mm"`**.
    * skills : the skills the project needed. Will be shown in the infogrid at the bottom of the page.
  * The rest of the document is just markdown, so add a paragraph or two, and the images the same way you would do in any other markdown document.
  * Images should have alt text (`![thats this bit](/s-images/...)`), this will eventually be used as the image captions.
  * Because it's mdx, you can also use react components in the markdown document.
    * The `<Box></Box>` component is accessible without having to import anything. 
    * You can style `Box` with the `sx` prop.
* images for those projects are in `static/s-images/work/<whatever the project is>`
* links for the nav bar and footer are stored in `src/_content/Links.js`
  * nav bar links are under the `Nav` list
  * footer links are a combo of the `Nav` links and the `Footer Extras` links.
* the theme styles are found under `src/gatsby-plugin-theme-ui/index.js`
