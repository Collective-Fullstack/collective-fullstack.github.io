module.exports = {
  siteMetadata: {
    title: `Collective Fullstack`,
    description: ``,
    author: `Collective Fullstack`,
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-theme-style-guide',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          "work-posts": require.resolve("./src/components/WorkPageLayout.js"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00768E`,
        theme_color: `#00768E`,
        display: `minimal-ui`,
        icon: `src/images/cf-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "work-posts",
        path: `${__dirname}/src/pages/work/`,
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
