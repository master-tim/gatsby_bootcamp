// /**
//  * Configure your Gatsby site with this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
//  */

// /**
//  * @type {import('gatsby').GatsbyConfig}
//  */
module.exports = {
  siteMetadata: {
    title: "Full-Stack Bootcamp",
    author: "Temirlan Dzhoroev",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        // spaceId: process.env.$CONTENTFUL_SPACE_ID,
        // accessToken: process.env.$CONTENTFUL_ACCESS_TOKEN,
        spaceId: `x0c9bo289gav`,
        accessToken: `E1Glu2Km8xpATkd_IQJZzLiD_-1sJluKZe1ZgFNXvj8`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
};
