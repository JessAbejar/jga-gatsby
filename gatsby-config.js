/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Jessica G. Abejar`,
    description: `Jessica G. Abejar is a multipotentialite delving into dance, wellness, events, writing, and now integrating tech.`,
    author: `Jessica G. Abejar`,
    url: `https://jessicagabejar.com`,
    image: `/image.png`,
    twitterUsername: `@_jessicode`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name : `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name : `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Cookie']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jessica G. Abejar`,
        short_name: `JGA`,
        start_url: `/`,
        background_color: `#373737`,
        theme_color: `#f0b3c9`,
        display: `fullscreen`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ]
}
