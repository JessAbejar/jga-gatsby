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
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jessica G. Abejar`,
        short_name: `JGA`,
        start_url: `/`,
        background_color: `#373737`,
        theme_color: `#525252`,
        display: `fullscreen`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ]
}
