const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

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
      tags: allMarkdownRemark {
        distinct(field: frontmatter___tags)
      }
      posts: allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.posts.nodes.forEach(node => {
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
    result.data.tags.distinct.forEach(tag => {
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
