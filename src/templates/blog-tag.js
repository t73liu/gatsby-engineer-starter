import { graphql } from "gatsby";
import Blog from "../components/blog";

export default Blog;

export const query = graphql`
  query($tag: [String]) {
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    posts: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: $tag } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        timeToRead
        excerpt
        frontmatter {
          tags
          date(formatString: "YYYY-MM-DD")
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;
