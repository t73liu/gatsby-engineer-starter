import { graphql } from "gatsby";
import Blog from "../components/blog";

export default Blog;

export const query = graphql`
  query {
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        timeToRead
        excerpt
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          tags
        }
        fields {
          slug
        }
      }
    }
  }
`;
