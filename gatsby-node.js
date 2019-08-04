const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { flatMap, uniq } = require("lodash");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      });
    });

    uniq(
      flatMap(
        result.data.allMarkdownRemark.edges,
        ({ node }) => node.frontmatter.tags
      )
    ).forEach(tag => {
      createPage({
        path: `/blog/tags/${tag}/`,
        component: path.resolve("./src/templates/blog-tag.js"),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          tag,
        },
      });
    });
  });
};
