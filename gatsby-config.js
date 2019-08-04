/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/gatsby-engineer-starter",
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/layout.js")
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-lodash",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-purgecss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Engineer Starter",
        short_name: "Gatsby Engineer Starter",
        start_url: "/",
        background_color: "#CDC449",
        theme_color: "#CDC449",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-remove-serviceworker",
    // "gatsby-plugin-offline",
  ],
  siteMetadata: {
    title: "Gatsby Engineer Starter",
    description: "A starter for engineering blog and projects.",
    author: "@t73liu",
  },
};
